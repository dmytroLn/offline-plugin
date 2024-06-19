import { WebPlugin } from '@capacitor/core';
import mapboxgl from 'mapbox-gl';
export class MapsOfflineWeb extends WebPlugin {
    constructor() {
        super({
            name: 'MapboxPlugin',
            platforms: ['web'],
        });
        this.map = null;
    }
    async initialize(options) {
        mapboxgl.accessToken = options.accessToken;
    }
    async showMap(options) {
        if (this.map) {
            this.map.remove();
        }
        const mapContainer = document.createElement('div');
        mapContainer.style.width = '100%';
        mapContainer.style.height = '100vh';
        document.body.appendChild(mapContainer);
        this.map = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [options.longitude, options.latitude],
            zoom: options.zoom,
        });
    }
}
//# sourceMappingURL=web.js.map