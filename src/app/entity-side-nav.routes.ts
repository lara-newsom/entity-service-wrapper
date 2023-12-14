import { Routes } from '@angular/router';
import { ENTITY_SIDE_NAV_OPTIONS, TRACK_TYPE } from './injection-tokens';
import { EntityListViewWrapperComponent } from './entity-list-view-wrapper/entity-list-view-wrapper.component';
import { ADVISORY_SIDE_NAV, ASSETS_SIDE_NAV } from './entity-side-nav.service';

export const ENTITY_ROUTES = (): Routes => [
  {
    path: 'assets',
    loadChildren: () => import('./entity-side-nav.service').then(m => m.getAssetsSideNavRoutes()),
    providers: [
      {
        provide: TRACK_TYPE,
        useValue: 'assets'
      },
      {
        provide: ENTITY_SIDE_NAV_OPTIONS,
        useValue: ASSETS_SIDE_NAV
      }
    ]
  },
  {
    path: 'advisories',
    loadChildren: () => import('./entity-side-nav.service').then(m => m.getAdvisoriesSideNavRoutes()),
    providers: [
      {
        provide: TRACK_TYPE,
        useValue: 'advisories'
      },
      {
        provide: ENTITY_SIDE_NAV_OPTIONS,
        useValue: ADVISORY_SIDE_NAV
      }
    ]
  },
];

