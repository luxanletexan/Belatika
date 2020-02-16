/**
 * This callback is displayed as a global member.
 * @callback ajaxCallback
 * @param {string} responseMessage
 */

/**
 *
 * @param {string} url
 * @param {ajaxCallback} callback
 * @param {string} method
 * @param {Object} datas
 */
export default function ajax(url, callback,  method = 'GET', datas = {})
{
    let formData = null;
    let properties = Object.keys(datas);
    if (properties.length > 0) {
        formData = new FormData();
        properties.forEach((property) => {
            formData.append(property, datas[property]);
        });
    }
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.addEventListener('load', () => {
        if (xhr.status < 200 && xhr.status >= 400) {
            console.error('Echec HTTP : code'.xhr.status);
        } else {
            callback(xhr.response);
        }
    });
    xhr.send(formData);
}