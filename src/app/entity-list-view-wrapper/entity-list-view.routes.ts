import { Routes } from '@angular/router';
import { signalStore, withState } from '@ngrx/signals';
import { ENTITY_VIEW_SIGNAL_STORE, withBanners, withFilters, withSideNav, withTable } from '../entity-list-view-signal-store-service';

const ASSETS_VIEW_STORE = signalStore(
  withState({entityType: 'assets'}),
  withSideNav(['all assets', 'hardware eol', 'software eol']),
  withFilters(['by date', 'expired', 'asset groups']),
  withTable(['data 1', 'data 2']),
  withBanners(['BIGGEST BANNER', 'other banner'])
);

const COVERAGE_VIEW_STORE = signalStore(
  withState({entityType: 'coverage'}),
  withSideNav(['coverage', 'coverage part 2']),
  withFilters(['coverage dates', 'product family', 'asset group parent', 'other filter']),
  withTable(['data 1', 'data 2', 'data 3', 'data 4', 'data 5', 'data 6']),
)

export const ENTITY_ROUTES: Routes = [
  {
    path: 'assets',
    loadComponent: () => import('./entity-list-view-wrapper.component').then(m => m.EntityListViewWrapperComponent),
    providers: [
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
        provide: ENTITY_VIEW_SIGNAL_STORE,
        useClass: COVERAGE_VIEW_STORE
      }
    ]
  },
];
