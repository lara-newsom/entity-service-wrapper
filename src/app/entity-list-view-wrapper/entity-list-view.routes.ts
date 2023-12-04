import { Routes } from '@angular/router';
import { ENTITY_VIEW_STORE, entityViewStore, withBanners, withFilters, withSideNav, withTable, withTrackConfiguration } from '../entity-view-service';

const ASSETS_VIEW_STORE = entityViewStore(
  withTrackConfiguration({entityType: 'assets'}),
  withSideNav(['all assets', 'hardware eol', 'software eol']),
  withFilters(['by date', 'expired', 'asset groups']),
  withTable(['data 1', 'data 2']),
  withBanners(['BIGGEST BANNER', 'other banner'])
);

const COVERAGE_VIEW_STORE = entityViewStore(
  withTrackConfiguration({entityType: 'coverage'}),
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
        provide: ENTITY_VIEW_STORE,
        useClass: ASSETS_VIEW_STORE
      }
    ]
  },
  {
    path: 'coverage',
    loadComponent: () => import('./entity-list-view-wrapper.component').then(m => m.EntityListViewWrapperComponent),
    providers: [
      {
        provide: ENTITY_VIEW_STORE,
        useClass: COVERAGE_VIEW_STORE
      }
    ]
  },
];
