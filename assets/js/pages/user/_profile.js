import ajax from "../../functions/_ajax";

document.addEventListener('DOMContentLoaded', () => {
    const newsletterElt = document.getElementById('toggle-newsletter');
    newsletterElt.addEventListener('click', () => {
        newsletterElt.setAttribute('disabled', 'true');
        let url = newsletterElt.dataset.url;
        ajax(
            url,
            (response) => {
                newsletterElt.removeAttribute('disabled');
                newsletterElt.checked = response.newsletter;
            },
            {
                method: 'POST'
            }
        );
    });
});