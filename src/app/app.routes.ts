import { Routes } from '@angular/router';
import { ENTITY_VIEW_STORE, entityViewStore } from './entity-view-service';
import { ASSETS_SIDE_NAV, COVERAGE_SIDE_NAV } from './side-nav-config';

export const routes: Routes = [
  {
    path: 'assets',
    loadComponent: () => import('./entity-list-view-wrapper/entity-list-view-wrapper.component').then(m => m.EntityListViewWrapperComponent),
    providers: [
      {
        provide: ENTITY_VIEW_STORE,
        useValue: entityViewStore({
          title: 'assets',
          sideNav: ASSETS_SIDE_NAV
        })
      }
    ]
  },
  {
    path: 'coverage',
    loadComponent: () => import('./entity-list-view-wrapper/entity-list-view-wrapper.component').then(m => m.EntityListViewWrapperComponent),
    providers: [
      {
        provide: ENTITY_VIEW_STORE,
        useValue: entityViewStore({
          title: 'coverage',
          sideNav: COVERAGE_SIDE_NAV
        })
      }
    ]
  },
];
