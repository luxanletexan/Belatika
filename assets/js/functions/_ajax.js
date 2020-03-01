/**
 * This callback is displayed as a global member.
 * @callback ajaxCallback
 * @param {Object|string} responseMessage
 */

/**
 *
 * @param {string} url
 * @param {ajaxCallback} callback
 * @param {Object} options
 * @param {string} [options.method=GET]
 * @param {Object} [options.datas={}]
 * @param {Boolean} [options.json=true]
 */
export default function ajax(url, callback, options = {})
{
    //Settings
    options = Object.assign({
        method: 'GET',
        datas: {},
        json: true,
    }, options);

    let formData = null;
    let properties = Object.keys(options.datas);
    if (properties.length > 0) {
        formData = new FormData();
        properties.forEach((property) => {
            formData.append(property, options.datas[property]);
        });
    }
    let xhr = new XMLHttpRequest();
    xhr.open(options.method, url);
    xhr.addEventListener('load', () => {
        if (xhr.status < 200 && xhr.status >= 400) {
            console.error('Echec HTTP : code'.xhr.status);
        } else {
            let response = xhr.response;
            if (options.json) {
                try {
                    response = JSON.parse(response);
                } catch (e) {
                    console.error('Format JSON invalide');
                    return false;
                }
            }
            callback(response);
        }
    });
    xhr.send(formData);
}