import { Injectable, InjectionToken, Type, WritableSignal, signal } from '@angular/core';

interface EntityViewConfig {
  entityType: string;
}

// we can create additional optional configuration functions that can be passed into the store creation function
// that way we would be able to create an extensible state creation factory that allows each track to define their views in a standard way with minimal configuration
// This idea is absolutely swiped from SignalStore

export function withTrackConfiguration(trackConfiguration: EntityListViewConfiguration): EntityListViewConfiguration {
  // could grab additional track based config here
  console.log('up in here')
  return {
    ...trackConfiguration
  };
}

export function withSideNav(sideNavOptions: string[]): EntityListViewFeature {
  console.log('with side nav')
  return (trackConfiguration) => {
    console.log('with side nav', trackConfiguration)
    return {
      ...trackConfiguration,
      sideNav: signal({
        inputs: {
          title: trackConfiguration.entityType,
          sideNavOptions
        },
      })
    }
}
}

export function withFilters(filters: string[]): EntityListViewFeature {
  return (trackConfiguration) => ({
    ...trackConfiguration,
    filters: signal({
      inputs: {
        title: trackConfiguration.entityType,
        filters
      },
    })
  })
}

export function withTable(tableData: string[]): EntityListViewFeature {
  return (trackConfiguration) =>  ({
    ...trackConfiguration,
    table: signal({
      inputs: {
        title: trackConfiguration.entityType,
        tableData
      },
    })
  })
}

export function withBanners(banners: string[]): EntityListViewFeature {
  return (trackConfiguration) => ({
    ...trackConfiguration,
    banner: signal({
      inputs: { title: trackConfiguration.entityType },
      banners
    })
  })
}

export function entityViewStore(
  trackConfiguration: EntityListViewConfiguration
): Type<EntityViewService>;
export function entityViewStore(
  trackConfiguration: EntityListViewConfiguration,
  f1: EntityListViewFeature,
): Type<EntityViewService>;
export function entityViewStore(
  trackConfiguration: EntityListViewConfiguration,
  f1: EntityListViewFeature,
  f2: EntityListViewFeature,
): Type<EntityViewService>;
export function entityViewStore(
  trackConfiguration: EntityListViewConfiguration,
  f1: EntityListViewFeature,
  f2: EntityListViewFeature,
  f3: EntityListViewFeature,
): Type<EntityViewService>;
export function entityViewStore(
  trackConfiguration: EntityListViewConfiguration,
  f1: EntityListViewFeature,
  f2: EntityListViewFeature,
  f3: EntityListViewFeature,
  f4: EntityListViewFeature,
): Type<EntityViewService>;
export function entityViewStore({ sideNav, filters, banner, table }: EntityListViewConfiguration): Type<EntityViewService> {
	@Injectable()
	class EntityViewStore {
    components: ComponentConfig = {};

		constructor() {
			this.components.sideNav = sideNav ?? undefined;
      this.components.filters = filters ?? undefined;
      this.components.banner = banner ?? undefined;
      this.components.table = table ?? undefined;
		}
	}

	return EntityViewStore;
}

export interface EntityViewService {
  components: ComponentConfig;
}

interface ComponentConfig {
    sideNav?: WritableSignal<ComponentDeclarations>,
    filters?: WritableSignal<ComponentDeclarations>,
    banner?: WritableSignal<ComponentDeclarations>,
    table?: WritableSignal<ComponentDeclarations>,
}

interface ComponentDeclarations {
  inputs?: Record<string, string | string[]>;
  sideNavItems?: string[];
}

export const ENTITY_VIEW_STORE = new InjectionToken<EntityViewService>(
	'Entity View Store',
);

export type EntityListViewConfiguration = {entityType: string} & ComponentConfig

export type EntityListViewFeature<
  Input extends EntityListViewConfiguration = EntityListViewConfiguration,
  Output extends EntityListViewConfiguration = EntityListViewConfiguration
> = (listViewConfig: EntityListViewConfiguration) => EntityListViewConfiguration
