import { inject } from '@angular/core';
import { signalStoreFeature, withState } from '@ngrx/signals';
import { Store } from '@ngrx/store';
import { selectEntityBanners, selectEntityData, selectEntityFilters, selectEntitySideNav } from './state/reducer';

export type State = {
  entityType: string;
  tableData?: string[];
  banners?: string[];
  filters?: string[];
  sideNavOptions?: string[];
}

// instead of passing in data, we will dispatch an action that triggers the http requests
// this method can expose the data by selecting off of the global state
export function withBanners(entityType: string) {
  return signalStoreFeature(
    withState((state: State) => {
      const store = inject(Store);
      const banners = store.select(selectEntityBanners(entityType));
      console.log('banners', banners)

      return { ...state, banners }
    })
  )
}

// instead of passing in data, we will dispatch an action that triggers the http requests
// this method can expose the data by selecting off of the global state
export function withSideNav(entityType: string) {
  return signalStoreFeature(
    withState((state: State) => {
      const store = inject(Store);

      const sideNavOptions = store.select(selectEntitySideNav(entityType));

      return { ...state, sideNavOptions }
    })
    // add side nav actions here if needed (should be handled by routerLink)
  )
}

// instead of passing in data, we will dispatch an action that triggers the http requests
// this method can expose the data by selecting off of the global state
export function withTable(entityType: string, store = inject(Store)) {
  return signalStoreFeature(
    withState((state: State) => {
      const store = inject(Store);

      // column config select user defined prefs or predefined prefs for solutions etc.
      const tableData = store.select(selectEntityData(entityType));

      return { ...state, tableData }
    }),
  )
}

// instead of passing in data, we will dispatch an action that triggers the http requests
// this method can expose the data by selecting off of the global state
export function withFilters(entityType: string) {
  return signalStoreFeature(
    withState((state: State) => {
      const store = inject(Store);

      const filters = store.select(selectEntityFilters(entityType));

      return { ...state, filters }
    }),    // add methods to handle filtering
  )
}
