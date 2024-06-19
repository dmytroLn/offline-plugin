import { registerPlugin } from '@capacitor/core';

import type { MapsOfflinePlugin } from './definitions';

const MapsOffline = registerPlugin<MapsOfflinePlugin>('MapsOffline', {
  web: () => import('./web').then(m => new m.MapsOfflineWeb()),
});

export * from './definitions';
export { MapsOffline };
