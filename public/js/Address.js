class Address {
    appId;
    appKey;
    imgPath;
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
     * @param {array} inputMapNames
     * @param {string} imgPath
     */
    constructor(appId, appKey, inputMapNames, imgPath) {
        this.appId = appId;
        this.appKey = appKey;
        this.imgPath = imgPath;
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
    }

    /**
     * @param {array} inputs
     */
    initTextInputs(inputs) {
        inputs.forEach((name) => {
            this.textInputs[name] = document.getElementById('input-map-' + name);
            this.placesAutocomplete[name] = places({
                appId: this.appId,
                apiKey: this.appKey,
                container: this.textInputs[name],
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
        this.formElt.addEventListener('submit', (e) => { this.handleOnSubmit(e) });
        let inputMapBillingElt = document.getElementById('input-map-billing');
        this.sameAddressCheckboxElt.addEventListener('click',  (e) => {
            this.textInputs.billing.parentElement.style.display = e.target.checked ? 'none' : 'block';
            this.textInputs.billing.required = !e.target.checked;
        });

        inputMapBillingElt.parentElement.style.display = 'none';
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

    handleOnSubmit(e)
    {
        this.populate();
        e.preventDefault();
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
        this.inputMapNames.forEach((name) => {
            //TODO: populate the form
        });
    }

    isValid()
    {
        let sameAddressIsChecked = this.sameAddressCheckboxElt.checked;
        this.inputMapNames.forEach((name) => {
            let fullAdress = this.formElt.elements['input-map-'+name].value;
            if(fullAdress.length > 0) {
                this.adresses[name].full = fullAdress;
            } else if (fullAdress.length === 0 && (name === 'delivery' || !sameAddressIsChecked)) {
                return false;
            }
        });
        return true;
    }
}