import { Routes } from '@angular/router';
import { signalStore, withHooks, withState } from '@ngrx/signals';
import { withBanners, withFilters, withSideNav, withTable } from '../entity-list-view-signal-store-service';
import { Injectable, inject, runInInjectionContext } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadListView } from '../state/actions';
import { ENTITY_TYPE, ENTITY_VIEW_SIGNAL_STORE } from '../injection-tokens';

export const ASSETS_VIEW_STORE = signalStore(
  withHooks({
    onInit(){
      const store = inject(Store);
      const entityType = inject(ENTITY_TYPE);

      store.dispatch(loadListView({entityType}))
    }
  }),
  withSideNav(),
  withFilters(),
  withTable(),
  withBanners()
);

export const COVERAGE_VIEW_STORE = signalStore(
  withHooks({
    onInit(){
      const store = inject(Store);
      const entityType = inject(ENTITY_TYPE);

      store.dispatch(loadListView({entityType}))
    }
  }),
  withSideNav(),
  withFilters(),
  withTable(),
);


export const ENTITY_ROUTES: Routes = [
  {
    path: 'assets',
    loadComponent: () => import('./entity-list-view-wrapper.component').then(m => m.EntityListViewWrapperComponent),
    providers: [
      {
        provide: ENTITY_TYPE,
        useValue: 'assets'
      },
      {
        provide: ENTITY_VIEW_SIGNAL_STORE,
        useClass: ASSETS_VIEW_STORE
      }
    ]
  },
  {
    path: 'coverage',
    loadComponent: () => import('./entity-list-view-wrapper.component').then(m => m.EntityListViewWrapperComponent),
    providers: [
      {
        provide: ENTITY_TYPE,
        useValue: 'contracts'
      },
      {
        provide: ENTITY_VIEW_SIGNAL_STORE,
        useClass: COVERAGE_VIEW_STORE
      }
    ]
  },
];
