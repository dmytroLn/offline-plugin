import { registerPlugin } from '@capacitor/core';
const MapsOffline = registerPlugin('MapsOffline', {
    web: () => import('./web').then(m => new m.MapsOfflineWeb()),
});
export * from './definitions';
export { MapsOffline };
//# sourceMappingURL=index.js.map