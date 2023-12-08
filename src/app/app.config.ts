import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { ENTITY_STATE, entityReducer } from './state/reducer';
import { EntityEffect } from './state/effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideStore({[ENTITY_STATE]: entityReducer}),
    provideEffects(EntityEffect)
]
};
