import { inject } from '@angular/core';
import { patchState, signalStoreFeature, withHooks, withMethods, withState } from '@ngrx/signals';
import { Store } from '@ngrx/store';
import { selectEntityBanners, selectEntityData, selectEntityFilters, selectEntitySideNav } from './state/reducer';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tap } from 'rxjs';
import { ENTITY_TYPE } from './injection-tokens';

export type State = {
  entityType: string;
  tableData?: string[];
  banners?: string[];
  filters?: string[];
  sideNavOptions?: string[];
}

// instead of passing in data, we will dispatch an action that triggers the http requests
// this method can expose the data by selecting off of the global state
export function withBanners() {

  return signalStoreFeature(
    withState((state: State) => {
      return { ...state, banners: [] }
    }),
    withMethods((state) => {
      const store = inject(Store);
      const entityType = inject(ENTITY_TYPE);

      // column config select user defined prefs or predefined prefs for solutions etc.
      const banners = store.select(selectEntityBanners(entityType));

      return {
        setBanners: rxMethod(() => banners.pipe(
          tap((banners) => {
            patchState(state, {banners})
          })
        ))
      }
    }),
    withHooks({
      onInit({setBanners}){
        setBanners('trigger')
      }
    })
  )
}

// instead of passing in data, we will dispatch an action that triggers the http requests
// this method can expose the data by selecting off of the global state
export function withSideNav() {

  return signalStoreFeature(
    withState((state: State) => {
      return { ...state, sideNavOptions: [] }
    }),
    withMethods((state) => {
      const store = inject(Store);
      const entityType = inject(ENTITY_TYPE);

      const sideNavOptions = store.select(selectEntitySideNav(entityType));

      return {
        setSideNavOptions: rxMethod(() => sideNavOptions.pipe(
          tap((sideNavOptions) => {
            patchState(state, {sideNavOptions})
          })
        ))
      }
    }),
    withHooks({
      onInit({setSideNavOptions}){
        setSideNavOptions({})
      }
    })
  )
}

// instead of passing in data, we will dispatch an action that triggers the http requests
// this method can expose the data by selecting off of the global state
export function withTable() {

  return signalStoreFeature(
    withState((state: State) => {
      return { ...state, tableData: [] }
    }),
    withMethods((state) => {
      const store = inject(Store);
      const entityType = inject(ENTITY_TYPE);

      // column config select user defined prefs or predefined prefs for solutions etc.
      const tableData = store.select(selectEntityData(entityType));

      return {
        setTableData: rxMethod(() => tableData.pipe(
          tap((tableData) => {
            patchState(state, {tableData})
          })
        ))
      }
    }),
    withHooks({
      onInit({setTableData}){
        setTableData('trigger')
      }
    })
  )
}

// instead of passing in data, we will dispatch an action that triggers the http requests
// this method can expose the data by selecting off of the global state
export function withFilters() {
  return signalStoreFeature(
    withState((state: State) => {
      return { ...state, filters: [] }
    }),
    withMethods((state) => {
      const store = inject(Store);
      const entityType = inject(ENTITY_TYPE);

      // column config select user defined prefs or predefined prefs for solutions etc.
      const filters = store.select(selectEntityFilters(entityType));

      return {
        setFilters: rxMethod(() => filters.pipe(
          tap((filters) => {
            patchState(state, {filters})
          })
        ))
      }
    }),
    withHooks({
      onInit({setFilters}){
        setFilters('trigger')
      }
    })
  )
}
