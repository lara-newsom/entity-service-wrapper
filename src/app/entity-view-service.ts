import { Injectable, InjectionToken, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EntityBannerViewComponent } from './entity-banner-view/entity-banner-view.component';
import { EntityFiltersViewComponent } from './entity-filters-view/entity-filters-view.component';
import { EntitySubMenuViewComponent } from './entity-sub-menu-view/entity-sub-menu-view.component';
import { EntityTableViewComponent } from './entity-table-view/entity-table-view.component';

export interface EntityViewConfig {
  title: string;
  sideNav: string[];
}

export function entityViewStore(data: EntityViewConfig) {
	@Injectable()
	class EntityViewStore {
    private readonly components = new BehaviorSubject({});
    readonly components$ = this.components.asObservable();

    // this service can handle dispatching the action to trigger the http request to fetch data
    // this service can handle selecting data from the global state OR we could provide stores to the appropriate child components to select the data
    // we can pass in different configuration to render the different view OR the service can be smart enough to fetch the correct config

		constructor() {
			this.components.next({
        sideNav: {
          component: EntitySubMenuViewComponent,
          inputs: {
            title: data.title,
            sideNavItems: data.sideNav
          },
        },
        filters: {
          component: EntityFiltersViewComponent,
          inputs: { title: data.title},
        },
        banner: data.title === 'assets' ? {
          component: EntityBannerViewComponent,
          inputs: { title: data.title},
        } : undefined,
        table: {
          component: EntityTableViewComponent,
          inputs: { title: data.title},
        }
      })
		}
	}

	return new EntityViewStore();
}

export interface EntityViewService {
  components$: Observable<ComponentConfig>;
}

interface ComponentConfig {
    sideNav: ComponentDeclarations,
    filters: ComponentDeclarations,
    banner: ComponentDeclarations,
    table: ComponentDeclarations
}

interface ComponentDeclarations {
  component: Type<any> | null;
  inputs: Record<string, string>
}

export const ENTITY_VIEW_STORE = new InjectionToken<EntityViewService>(
	'Entity View Store',
);
