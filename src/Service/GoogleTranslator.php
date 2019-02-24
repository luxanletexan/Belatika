<?php

namespace App\Service;


use Doctrine\Common\Persistence\ObjectManager;
use Stichoza\GoogleTranslate\GoogleTranslate;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Yaml\Yaml;
use App\Entity\Translation;

class GoogleTranslator
{
    /**
     * @var GoogleTranslate
     */
    private $translator;
    /**
     * @var RequestStack
     */
    private $request;
    /**
     * @var ObjectManager
     */
    private $manager;
    /**
     * @var string
     */
    private $projectDir;

    public function __construct(GoogleTranslate $translator, RequestStack $request, ObjectManager $manager, $projectDir)
    {
        $this->translator = $translator;
        $this->request = $request;
        $this->manager = $manager;
        $this->projectDir = $projectDir;
    }

    /**
     * Returns translated text from translations dir, or translate it from google trans and update translation dir
     *
     * @param string $text
     * @return string
     */
    public function gTrans($text):string
    {
        $request = $this->request->getCurrentRequest();
        if(null === $request) { return $text; }
        $language = $request->getLocale();
        if($language === 'fr') { return $text; }

        $translationFile = $this->projectDir . '\translations\messages.'.$language.'.yaml';

        if(file_exists($translationFile)){
            $translations = Yaml::parseFile($translationFile);

            if(is_array($translations) && array_key_exists($text, $translations)) {
                return $translations[$text];
            }
        }

        try {
            $translation = $this->translator->setTarget($language)->translate($text);
            $yaml = Yaml::dump([$text => $translation]);
            file_put_contents($translationFile, $yaml, FILE_APPEND);
            return $translation;
        }catch (\ErrorException $e) {
            return $text;
        }
    }

    /**
     * Returns translated text from database, or translate it from google trans and update database
     *
     * @param string $text
     * @return string
     */
    public function gTransDB($text):string
    {
        $request = $this->request->getCurrentRequest();
        if(null === $request) { return $text; }
        $language = $request->getLocale();
        if($language === 'fr') { return $text; }
        $search = $this->getTranslationFromDatabase($text, $language);
        if(null !== $search) {
            return $search->getTranslation();
        }
        try {
            $translation = new Translation();
            $translatedText = $this->translator->setTarget($language)->translate($text);
            $translation
                ->setTranslation(str_replace('</ ', '</', $translatedText))
                ->setCrc32(crc32($text))
                ->setTarget($language);
            $this->manager->persist($translation);
            $this->manager->flush();
            return $translation->getTranslation();
        }catch (\ErrorException $e) {
            return $text;
        }
    }

    /**
     * Search for a translation in database using a text numeric print identifier for faster search
     *
     * @param string $text
     * @param string $language
     * @return Translation|null
     */
    private function getTranslationFromDatabase($text, $language):?Translation
    {
        $crc32 = crc32($text);
        return $this->manager->getRepository(Translation::class)->searchTranslation($crc32, $language);
    }
}