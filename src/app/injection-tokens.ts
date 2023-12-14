import { InjectionToken, Type, WritableSignal } from '@angular/core';
import { Route } from '@angular/router';

export interface SideNavItem {
  displayText: string;
  entityType: string;
  entityStore: Type<unknown>
}
export interface EntitySideNavService {
  getSideNavOptions: () => SideNavItem[];
  getSideNavRoutes: () => Route[];
}

export interface EntityViewService {
  entityType: WritableSignal<string>;
  tableData?: WritableSignal<string[]>;
  banners?: WritableSignal<string[]>;
  filters?: WritableSignal<string[]>;
  sideNavOptions?: WritableSignal<string[]>;
}

export const ENTITY_SIDE_NAV_OPTIONS = new InjectionToken<SideNavItem[]>(
	'Entity Side Nav Options',
);

export const ENTITY_VIEW_SIGNAL_STORE = new InjectionToken<EntityViewService>(
	'Entity View Store',
);

export const TRACK_TYPE = new InjectionToken<string>(
	'Track Type',
);

export const ENTITY_TYPE = new InjectionToken<string>(
	'Entity Type',
);
