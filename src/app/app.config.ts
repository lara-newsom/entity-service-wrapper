import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ENTITY_STATE, entityReducer } from './state/reducer';
import { EntityEffect } from './state/effect';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideStore({ [ENTITY_STATE]: entityReducer }),
    provideEffects(EntityEffect),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
