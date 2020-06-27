import ajax from "../functions/_ajax";
import L from '../vendors/leaflet';
import places from '../vendors/places';

export default class Salesmap {

    /**
     * @callback ajaxCallback
     * @param {Object} response
     */

    /**
     * @param {String} mapid
     * @param {Object} options
     * @param {{element: HTMLElement, url: string, callback: ajaxCallback, datas: Object}[]} options.buttons
     * @param {Boolean} options.display
     */
    constructor(mapid, options = {})
    {
        //Options
        this.options = Object.assign({
            buttons: [],
            display: true,
        }, options);

        this.map = L.map(mapid).setView([51.505, -0.09], 13);
        this.layer = new L.TileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                minZoom: 1,
                maxZoom: 17,
                attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            }
        );

        this.map.setView(new L.LatLng(0, 0), 1);
        this.map.addLayer(this.layer);


        ajax('https://localbelatika.com/json/world.geo.json', (geojson) => {
            console.log(geojson);
            this.geojson = geojson;
            geojson.features.forEach((feature) => {
                console.log(feature.properties.iso_a2 + ' / ' + feature.properties.iso_a3);
            });
            // this.getSales(1);
            L.geoJson(geojson, {style: this.style}).addTo(this.map);
        });
    }

    style(feature) {
        return {
            fillColor: Salesmap.getColor(feature.properties.gdp_md_est),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    static getColor(d) {
        return '#ca8ed0';
    }

    getSales(page)
    {
        ajax('https://localbelatika.com/get-etsy-sales/'+page, (response) => {
            console.log(response);
            if (response.pagination.next_page) {
                this.getSales(response.pagination.next_page);
            }
        });
    }
}