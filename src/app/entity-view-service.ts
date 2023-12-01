import { Injectable, InjectionToken, Type, WritableSignal, signal } from '@angular/core';

interface EntityViewConfig {
  entityType: string;
  sideNavOptions: string[];
}

// we can create additional optional configuration functions that can be passed into the store creation function
// that way we would be able to create an extensible state creation factory that allows each track to define their views in a standard way with minimal configuration
// This idea is absolutely swiped from SignalStore

export function withTrackConfiguration(config: EntityViewConfig): {config: EntityViewConfig}{
  // could grab additional track based config here
  return {
    config,
  };
}

export function entityViewStore(
  configFn: {config: EntityViewConfig}
): Type<EntityViewService>;
export function entityViewStore({ config }: {config: EntityViewConfig}): Type<EntityViewService> {
	@Injectable()
	class EntityViewStore {
    components: ComponentConfig = {
      sideNav: signal({} as ComponentDeclarations),
      filters: signal({} as ComponentDeclarations),
      banner: signal({} as ComponentDeclarations),
      table: signal({} as ComponentDeclarations),
    }

		constructor() {
			this.components.sideNav.set({
        inputs: {
          title: config.entityType,
          sideNavOptions: config.sideNavOptions
        },
      });
      this.components.filters.set({
        inputs: { title: config.entityType},
      });
      if(config.entityType === 'assets') {
        this.components.banner.set({
          inputs: { title: config.entityType},
        });
      }
      this.components.table.set({
        inputs: { title: config.entityType},
      });
		}
	}

	return EntityViewStore;
}

export interface EntityViewService {
  components: ComponentConfig;
}

interface ComponentConfig {
    sideNav: WritableSignal<ComponentDeclarations>,
    filters: WritableSignal<ComponentDeclarations>,
    banner: WritableSignal<ComponentDeclarations>,
    table: WritableSignal<ComponentDeclarations>,
}

interface ComponentDeclarations {
  inputs?: Record<string, string | string[]>;
  sideNavItems?: string[];
}

export const ENTITY_VIEW_STORE = new InjectionToken<EntityViewService>(
	'Entity View Store',
);
