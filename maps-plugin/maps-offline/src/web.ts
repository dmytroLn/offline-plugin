import { WebPlugin } from '@capacitor/core';
import mapboxgl from 'mapbox-gl';

import type { MapsOfflinePlugin } from './definitions';

export class MapsOfflineWeb extends WebPlugin implements MapsOfflinePlugin {
  private map: mapboxgl.Map | null = null;
  constructor() {
    super({
      name: 'MapboxPlugin',
      platforms: ['web'],
    });
  }
  async initialize(options: { accessToken: string }): Promise<void> {
    mapboxgl.accessToken = options.accessToken;
  }

  async showMap(options: {
    latitude: number;
    longitude: number;
    zoom: number;
  }): Promise<void> {
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
