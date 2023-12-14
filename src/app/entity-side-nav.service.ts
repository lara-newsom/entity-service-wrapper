import { ENTITY_TYPE, ENTITY_VIEW_SIGNAL_STORE, SideNavItem } from "./injection-tokens";
import { ASSETS_VIEW_STORE, COVERAGE_VIEW_STORE } from "./entity.service";
import { EntityListViewWrapperComponent } from "./entity-list-view-wrapper/entity-list-view-wrapper.component";

export const ASSETS_SIDE_NAV: SideNavItem[] = [
  {
    displayText: 'All Assets',
    entityType: 'all-assets',
    entityStore: ASSETS_VIEW_STORE
  },
  {
    displayText: 'Contracts',
    entityType: 'contracts',
    entityStore: ASSETS_VIEW_STORE
  },
];
export const ADVISORY_SIDE_NAV: SideNavItem[] = [
  {
    displayText: 'Security Advisories',
    entityType: 'security-advisories',
    entityStore: COVERAGE_VIEW_STORE
  },
  {
    displayText: 'Field Notices',
    entityType: 'field-notices',
    entityStore: COVERAGE_VIEW_STORE
  },
];

export function getAssetsSideNavRoutes(){
  return [
    {
      path: '',
      component: EntityListViewWrapperComponent,
      providers: [
        {
          provide: ENTITY_TYPE,
          useValue: 'all-assets'
        },
        {
          provide: ENTITY_VIEW_SIGNAL_STORE,
          useClass: ASSETS_VIEW_STORE
        }
      ]
    },
    {
      path: 'all-assets',
      component: EntityListViewWrapperComponent,
      providers: [
        {
          provide: ENTITY_TYPE,
          useValue: 'all-assets'
        },
        {
          provide: ENTITY_VIEW_SIGNAL_STORE,
          useClass: ASSETS_VIEW_STORE
        }
      ]
    },
    {
      path: 'contracts',
      component: EntityListViewWrapperComponent,
      providers: [
        {
          provide: ENTITY_TYPE,
          useValue: 'contracts'
        },
        {
          provide: ENTITY_VIEW_SIGNAL_STORE,
          useClass: ASSETS_VIEW_STORE
        }
      ]
    }
  ]
}

export function getAdvisoriesSideNavRoutes(){
  return [
    {
      path: '',
      component: EntityListViewWrapperComponent,
      providers: [
        {
          provide: ENTITY_TYPE,
          useValue: 'security-advisories'
        },
        {
          provide: ENTITY_VIEW_SIGNAL_STORE,
          useClass: COVERAGE_VIEW_STORE
        }
      ]
    },
    {
      path: 'security-advisories',
      component: EntityListViewWrapperComponent,
      providers: [
        {
          provide: ENTITY_TYPE,
          useValue: 'security-advisories'
        },
        {
          provide: ENTITY_VIEW_SIGNAL_STORE,
          useClass: COVERAGE_VIEW_STORE
        }
      ]
    },
    {
      path: 'field-notices',
      component: EntityListViewWrapperComponent,
      providers: [
        {
          provide: ENTITY_TYPE,
          useValue: 'field-notices'
        },
        {
          provide: ENTITY_VIEW_SIGNAL_STORE,
          useClass: COVERAGE_VIEW_STORE
        }
      ]
    }
  ]
}


