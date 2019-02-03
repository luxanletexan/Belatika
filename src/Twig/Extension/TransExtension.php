<?php

namespace App\Twig\Extension;


use App\Entity\Translation;
use Doctrine\Common\Persistence\ObjectManager;
use Stichoza\GoogleTranslate\GoogleTranslate;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Yaml\Yaml;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class TransExtension extends AbstractExtension
{
    private $translator;
    private $requestStack;
    private $manager;
    private $projectDir;

    public function __construct(GoogleTranslate $translator, RequestStack $requestStack, ObjectManager $manager, $projectDir)
    {
        $this->translator = $translator;
        $this->requestStack = $requestStack;
        $this->manager = $manager;
        $this->projectDir = $projectDir;
    }

    public function getFilters():array
    {
        return [
            new TwigFilter('gTrans', [$this, 'gTrans']),
            new TwigFilter('gTransDB', [$this, 'gTransDB']),
        ];
    }

    public function gTransDB($text)
    {
        $request = $this->requestStack->getCurrentRequest();
        if(null === $request) { return $text; }
        $language = $request->getLocale();
        if($language === 'fr') { return $text; }
        $search = $this->getTranslationFromDatabase($text, $language);
        if(null !== $search) {
            return $search->getTranslation();
        }
        try {
            $translation = new Translation();
            $translation
                ->setTranslation($this->translator->setTarget($language)->translate($text))
                ->setCrc32(crc32($text))
                ->setTarget($language);
            $this->manager->persist($translation);
            $this->manager->flush();
            return $translation->getTranslation();
        }catch (\ErrorException $e) {
            return $text;
        }
    }

    private function getTranslationFromDatabase($text, $language):?Translation
    {
        $crc32 = crc32($text);
        return $this->manager->getRepository(Translation::class)->searchTranslation($crc32, $language);
    }

    public function gTrans($text):string
    {
        $request = $this->requestStack->getCurrentRequest();
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
}