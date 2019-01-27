<?php

namespace App\Tests\Repository;


use App\Entity\Translation;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class TranslationRepositoryTest extends KernelTestCase
{
    /**
     * @var \Doctrine\ORM\EntityManager
     */
    private $entityManager;

    /**
     * {@inheritdoc}
     */
    protected function setUp()
    {
        $kernel = self::bootKernel();

        $this->entityManager = $kernel->getContainer()
            ->get('doctrine')
            ->getManager();
    }

    public function testSearchTranslation():void
    {
        $translation = $this->entityManager
            ->getRepository(Translation::class)
            ->searchTranslation(crc32('Hello world'), 'fr')
        ;

        $this->assertSame('Bonjour le monde', $translation->getTranslation());

    }

    /**
     * {@inheritDoc}
     */
    protected function tearDown()
    {
        parent::tearDown();

        $this->entityManager->close();
        $this->entityManager = null; // avoid memory leaks
    }
}