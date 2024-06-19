import { WebPlugin } from '@capacitor/core';
import type { MapsOfflinePlugin } from './definitions';
export declare class MapsOfflineWeb extends WebPlugin implements MapsOfflinePlugin {
    private map;
    constructor();
    initialize(options: {
        accessToken: string;
    }): Promise<void>;
    showMap(options: {
        latitude: number;
        longitude: number;
        zoom: number;
    }): Promise<void>;
}
