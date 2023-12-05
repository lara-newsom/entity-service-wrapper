import { InjectionToken, WritableSignal } from '@angular/core';
import { signalStoreFeature, withMethods, withState } from '@ngrx/signals';

export type State = {
  entityType: string;
  tableData?: string[];
  banners?: string[];
  filters?: string[];
  sideNavOptions?: string[];
}

// instead of passing in data, we will dispatch an action that triggers the http requests
// this method can expose the data by selecting off of the global state
export function withBanners(banners: string[]) {
  return signalStoreFeature(
    withState((store: State) => ({ ...store, banners }))
    // add any banner actions that can happen here
  )
}

// instead of passing in data, we will dispatch an action that triggers the http requests
// this method can expose the data by selecting off of the global state
export function withSideNav(sideNavOptions: string[]) {
  return signalStoreFeature(
    withState((store: State) => ({ ...store, sideNavOptions }))
    // add side nav actions here if needed (should be handled by routerLink)
  )
}

// instead of passing in data, we will dispatch an action that triggers the http requests
// this method can expose the data by selecting off of the global state
export function withTable(tableData: string[]) {
  return signalStoreFeature(
    withState((store: State) => ({ ...store, tableData })),
    withMethods(() => {
      return {
        // we can codify the actions that the list view table can dispatch here
        // add sorting
        // add searching
        // get the types right here to be able to pull from the state
        downloadCsv: () => {
          console.log('dispatch Download Csv Action for ');
        }
      }
    })
  )
}

// instead of passing in data, we will dispatch an action that triggers the http requests
// this method can expose the data by selecting off of the global state
export function withFilters(filters: string[]) {
  return signalStoreFeature(
    withState((store: State) => ({ ...store, filters }))
    // add methods to handle filtering
  )
}

export interface EntityViewService {
  entityType: WritableSignal<string>;
  tableData?: WritableSignal<string[]>;
  banners?: WritableSignal<string[]>;
  filters?: WritableSignal<string[]>;
  sideNavOptions?: WritableSignal<string[]>;
}

export const ENTITY_VIEW_SIGNAL_STORE = new InjectionToken<EntityViewService>(
	'Entity View Store',
);
