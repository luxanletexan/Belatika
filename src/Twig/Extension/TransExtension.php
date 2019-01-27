<?php

namespace App\Twig\Extension;


use App\Entity\Translation;
use Doctrine\Common\Persistence\ObjectManager;
use Stichoza\GoogleTranslate\GoogleTranslate;
use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class TransExtension extends AbstractExtension
{
    private $translator;
    private $requestStack;
    private $manager;

    public function __construct(GoogleTranslate $translator, RequestStack $requestStack, ObjectManager $manager)
    {
        $this->translator = $translator;
        $this->requestStack = $requestStack;
        $this->manager = $manager;
    }

    public function getFilters():array
    {
        return [
            new TwigFilter('gTrans', [$this, 'translate']),
        ];
    }

    public function translate($text)
    {
        $request = $this->requestStack->getCurrentRequest();
        if(null === $request) { return $text; }
        $language = $request->getLocale();
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
}