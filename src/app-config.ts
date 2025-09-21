import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app.routes';
import { CustomPreloadingStrategy } from './preload-rule';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(CustomPreloadingStrategy)),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    importProvidersFrom(IonicModule.forRoot({})),
    provideHttpClient(),
    provideZonelessChangeDetection(),
  ],
};
