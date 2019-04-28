class Address {
    appId;
    appKey;
    imgPath;
    deliveryLatLng;
    inputMapNames;
    formElt;
    textInputs = {};
    sameAddressCheckboxElt;
    placesAutocomplete = {};
    map;
    layer;
    icon;
    markers = [];
    alertElt;
    adresses = {};
    formData;

    /**
     * @param {string} appId
     * @param {string} appKey
     * @param {Array} inputMapNames
     * @param {string} imgPath
     * @param {Object} deliveryLatLng
     * @param {number} deliveryLatLng.lat
     * @param {number} deliveryLatLng.lng
     */
    constructor(appId, appKey, inputMapNames, imgPath, deliveryLatLng = {}) {
        this.appId = appId;
        this.appKey = appKey;
        this.imgPath = imgPath;
        this.deliveryLatLng = deliveryLatLng;
        this.inputMapNames = inputMapNames;
        this.formElt = document.getElementById('addresses-form');
        this.alertElt = document.getElementById('address-alert');
        this.formData = new FormData();
        inputMapNames.forEach((name) => {
            this.adresses[name] = {};
        });
        this.sameAddressCheckboxElt = document.getElementById('same-address');
    }

    init() {
        this.initTextInputs(this.inputMapNames);
        this.initMap();
        this.initLayer();
        this.map.setView(new L.LatLng(0, 0), 1);
        this.map.addLayer(this.layer);
        this.initIcon();
        this.initEvents();
        if (this.deliveryLatLng.hasOwnProperty('lat') && this.deliveryLatLng.hasOwnProperty('lng')) {
            this.initDeliveryMarker();
        }
    }

    /**
     * @param {array} inputs
     */
    initTextInputs(inputs) {
        inputs.forEach((name) => {
            this.textInputs[name] = document.getElementById('fullAddress-' + name);
            this.placesAutocomplete[name] = places({
                appId: this.appId,
                apiKey: this.appKey,
                container: this.textInputs[name],
                type: 'address',
            });
        });
    }

    initMap() {
        this.map = L.map('map-container', {
            scrollWheelZoom: false,
            zoomControl: false
        });
    }

    initLayer() {
        this.layer = new L.TileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                minZoom: 1,
                maxZoom: 17,
                attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            }
        );
    }

    initIcon() {
        this.icon = L.icon({
            iconUrl: this.imgPath + 'ressources/flower.png',
            shadowUrl: this.imgPath + 'ressources/flower-shadow.png',
            iconSize: [38, 95], // size of the icon
            shadowSize: [50, 64], // size of the shadow
            iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
    }

    initEvents()
    {
        this.inputMapNames.forEach((name) => {
            this.placesAutocomplete[name].on('suggestions', (e) => { this.handleOnSuggestions(e) });
            this.placesAutocomplete[name].on('cursorchanged', (e) => { this.handleOnCursorchanged(e) });
            this.placesAutocomplete[name].on('change', (e) => { this.handleOnChange(e, name) });
            this.placesAutocomplete[name].on('clear', () => { this.handleOnClear(name) });
        } );
        this.formElt.addEventListener('submit', () => { this.handleOnSubmit() });
        let inputMapBillingElt = document.getElementById('fullAddress-billing');
        this.sameAddressCheckboxElt.addEventListener('click',  (e) => {
            this.textInputs.billing.parentElement.parentElement.style.display = e.target.checked ? 'none' : 'flex';
            this.textInputs.billing.required = !e.target.checked;
        });
        inputMapBillingElt.parentElement.parentElement.style.display = this.sameAddressCheckboxElt.checked ? 'none' : 'flex';
    }

    initDeliveryMarker()
    {
        let marker = L.marker(this.deliveryLatLng, {icon: this.icon});
        marker.addTo(this.map);
        this.markers.push(marker);
        this.findBestZoom();
    }

    handleOnSuggestions(e) {
        this.markers.forEach( (marker) => { this.removeMarker(marker) });
        this.alertElt.style.display = 'none';
        this.markers = [];

        if (e.suggestions.length === 0) {
            this.map.setView(new L.LatLng(0, 0), 1);
            this.alertElt.style.display = 'block';
            return;
        }

        e.suggestions.forEach( (suggestion) => { this.addMarker(suggestion) });
        this.findBestZoom();
    }

    handleOnChange(e, name) {
        this.markers
            .forEach( (marker, markerIndex) => {
                if (markerIndex === e.suggestionIndex) {
                    this.markers = [marker];
                    marker.setOpacity(1);
                    this.findBestZoom();
                    this.adresses[name] = e.suggestion;
                } else {
                    this.removeMarker(marker);
                }
            });
    }

    handleOnClear(name) {
        this.map.setView(new L.LatLng(0, 0), 1);
        this.markers.forEach( (marker) => { this.removeMarker(marker) });
        this.adresses[name] = {};
    }

    handleOnCursorchanged(e) {
        this.markers
            .forEach( (marker, markerIndex) => {
                if (markerIndex === e.suggestionIndex) {
                    marker.setOpacity(1);
                    marker.setZIndexOffset(1000);
                } else {
                    marker.setZIndexOffset(0);
                    marker.setOpacity(0.5);
                }
            });
    }

    handleOnSubmit()
    {
        this.populate();
    }

    addMarker(suggestion) {
        let marker = L.marker(suggestion.latlng, {opacity: .4, icon: this.icon});
        marker.addTo(this.map);
        this.markers.push(marker);
    }

    removeMarker(marker) {
        this.map.removeLayer(marker);
    }

    findBestZoom() {
        let featureGroup = L.featureGroup(this.markers);
        this.map.fitBounds(featureGroup.getBounds().pad(0.5), {animate: true});
    }

    populate()
    {
        if(!this.isValid()) {
            return false;
        }

        let fields = ['countryCode', 'city', 'administrative', 'county', 'country', 'postcode', 'name', 'value'];

        this.inputMapNames.forEach((name) => {
            Object.keys(this.adresses[name]).forEach((key) => {
                if(fields.indexOf(key) !== -1) {
                    this.createHiddenInput(key, name, this.adresses[name][key]);
                } else if (key === 'latlng') {
                    this.createHiddenInput('lat', name, this.adresses[name][key].lat);
                    this.createHiddenInput('lng', name, this.adresses[name][key].lng);
                }
            });
        });

        return true;
    }

    isValid()
    {
        let sameAddressIsChecked = this.sameAddressCheckboxElt.checked;
        this.inputMapNames.forEach((name) => {
            let fullAdress = this.formElt.elements['fullAddress-'+name].value;
            if(fullAdress.length > 0) {
                this.adresses[name].full = fullAdress;
            } else if (fullAdress.length === 0 && (name === 'delivery' || !sameAddressIsChecked)) {
                return false;
            }
        });
        return true;
    }

    createHiddenInput(type, name, value)
    {
        if (document.getElementById(type + '-' + name) !== null) {
            return;
        }
        let hiddenInput = document.createElement('input');
        hiddenInput.value = value;
        hiddenInput.id = type + '-' + name;
        hiddenInput.setAttribute('name', type + '-' + name);
        hiddenInput.setAttribute('type', 'hidden');
        this.formElt.append(hiddenInput);
    }
}