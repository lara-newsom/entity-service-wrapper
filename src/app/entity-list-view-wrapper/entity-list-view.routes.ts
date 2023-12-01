import { Routes } from '@angular/router';
import { ENTITY_VIEW_STORE, entityViewStore, withTrackConfiguration } from '../entity-view-service';
import { ASSETS_SIDE_NAV, COVERAGE_SIDE_NAV } from '../side-nav-config';

const ASSETS_VIEW_STORE = entityViewStore(withTrackConfiguration({
  entityType: 'assets',
  sideNavOptions: ASSETS_SIDE_NAV
}));

const COVERAGE_VIEW_STORE = entityViewStore(withTrackConfiguration({
  entityType: 'coverage',
  sideNavOptions: COVERAGE_SIDE_NAV
}))

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
