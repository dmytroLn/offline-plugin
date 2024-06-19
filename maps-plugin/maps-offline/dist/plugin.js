var capacitorMapsOffline = (function (exports, core, mapboxgl) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var mapboxgl__default = /*#__PURE__*/_interopDefaultLegacy(mapboxgl);

    const MapsOffline = core.registerPlugin('MapsOffline', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.MapsOfflineWeb()),
    });

    class MapsOfflineWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'MapboxPlugin',
                platforms: ['web'],
            });
            this.map = null;
        }
        async initialize(options) {
            mapboxgl__default["default"].accessToken = options.accessToken;
        }
        async showMap(options) {
            if (this.map) {
                this.map.remove();
            }
            const mapContainer = document.createElement('div');
            mapContainer.style.width = '100%';
            mapContainer.style.height = '100vh';
            document.body.appendChild(mapContainer);
            this.map = new mapboxgl__default["default"].Map({
                container: mapContainer,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [options.longitude, options.latitude],
                zoom: options.zoom,
            });
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        MapsOfflineWeb: MapsOfflineWeb
    });

    exports.MapsOffline = MapsOffline;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports, mapboxgl);
//# sourceMappingURL=plugin.js.map
