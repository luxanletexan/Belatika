<?php

namespace App\Controller;

use App\Form\SettingsType;
use App\Service\GoogleTranslator;
use Swift_Mailer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Yaml\Yaml;

/**
 * @Route("/admin")
 */
class AdminController extends AbstractController
{
    private $settingsFile;

    public function __construct(GoogleTranslator $googleTranslator, Swift_Mailer $mailer)
    {
        parent::__construct($googleTranslator, $mailer);
    }

    /**
     * @Route("/")
     * @return Response
     */
    public function index()
    {
        return $this->render('admin/index.html.twig');
    }

    /**
     * @Route("/settings")
     * @param Request $request
     * @return Response
     */
    public function settings(Request $request)
    {
        $this->settingsFile = $this->getParameter('kernel.project_dir').'\config\packages\belatika.yaml';
        $shop_settings = $this->getShopSettings();

        $form = $this->createForm(SettingsType::class, $shop_settings);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $shop_settings = $form->getData();
            $this->setShopSettings($shop_settings);
        }

        return $this->render('admin/settings.html.twig', ['form' => $form->createView()]);
    }

    private function getShopSettings()
    {
        $belatika_yaml = Yaml::parseFile($this->settingsFile);
        $shop_settings = $belatika_yaml['parameters']['shop_settings'];

        $salesStart = $shop_settings['sales']['start'];
        $salesStart = date_create()->setTimestamp($salesStart)->format('d/m/Y');
        $salesEnd = $shop_settings['sales']['end'];
        $salesEnd = date_create()->setTimestamp($salesEnd)->format('d/m/Y');

        $shop_settings['sales'] = $salesStart. ' - '.$salesEnd;

        return $shop_settings;
    }

    private function setShopSettings($shopSettings)
    {
        $sales = explode(' - ', $shopSettings['sales']);
        $sales = [
            'start' => \DateTime::createFromFormat('d/m/Y H:i:s', $sales[0].' 00:00:00')->getTimestamp(),
            'end' => \DateTime::createFromFormat('d/m/Y H:i:s', $sales[1].' 00:00:00')->getTimestamp(),
        ];

        $shopSettings['sales'] = $sales;

        $belatika_yaml = Yaml::parseFile($this->settingsFile);

        foreach ($shopSettings as $settingName => $setting) {
            if (array_key_exists($settingName, $belatika_yaml['parameters']['shop_settings'])) {
                $belatika_yaml['parameters']['shop_settings'][$settingName] = $setting;
            }
        }

        file_put_contents($this->settingsFile, Yaml::dump($belatika_yaml));
    }
}
