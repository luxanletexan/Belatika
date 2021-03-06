import Popup from "../../class/_Popup";
import Salesmap from "../../class/_Salesmap";

document.addEventListener('DOMContentLoaded', () => {
    const popupElt = document.getElementById('newsletter-popup');
    const subscribeNewsletterElt = document.getElementById('subscribe-newsletter');
    const stopNewsletterSuggestionElt = document.getElementById('stop-newsletter-suggestion');
    if (popupElt) {
        new Popup(popupElt, {
            buttons: [
                {
                    element: subscribeNewsletterElt,
                    url: subscribeNewsletterElt.dataset.url,
                    datas: {subscribe: true}
                },
                {
                    element: stopNewsletterSuggestionElt,
                    url: stopNewsletterSuggestionElt.dataset.url
                }
            ]
        });
    }
    new Salesmap('sales-map');
});