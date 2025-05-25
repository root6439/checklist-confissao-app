import {
  ApplicationConfig,
  importProvidersFrom,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouteReuseStrategy, provideRouter, withPreloading } from '@angular/router';
import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideStore } from '@ngrx/store';
import { sinReducer } from './app/store/sins.reducers';
import { historyReducer } from './app/store/history/history.reducers';
import { metaReducers } from './app/store/local-store.reducer';
import { provideHttpClient } from '@angular/common/http';
import { CustomPreloadingStrategy } from './preload-rule';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(CustomPreloadingStrategy)),
    provideAnimationsAsync(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    importProvidersFrom(IonicModule.forRoot({})),
    provideStore(
      { sins: sinReducer, history: historyReducer },
      { metaReducers }
    ),
    provideHttpClient(),
    provideExperimentalZonelessChangeDetection(),
  ],
};
