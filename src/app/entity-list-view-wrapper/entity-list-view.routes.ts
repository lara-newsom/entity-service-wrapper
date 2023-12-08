import { Routes } from '@angular/router';
import { signalStore, withHooks, withState } from '@ngrx/signals';
import { withBanners, withFilters, withSideNav, withTable } from '../entity-list-view-signal-store-service';
import { Injectable, inject, runInInjectionContext } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadListView } from '../state/actions';
import { ENTITY_VIEW_SIGNAL_STORE } from '../injection-tokens';

function getAssetsStore (entityType: string){
  return signalStore(
    withHooks({
      onInit(){
        const store = inject(Store);
        store.dispatch(loadListView({entityType}))
      }
    }),
    withState({entityType}),
    // withSideNav(entityType),
    // withFilters(entityType),
    // withTable(entityType),
    // withBanners(entityType)
  )
};

function getCoverageStore(entityType: string){
  return signalStore(
    withHooks({
      onInit(){
        const store = inject(Store);

        store.dispatch(loadListView({entityType}))
      }
    }),
    withState({entityType}),
    // withSideNav(entityType),
    // withFilters(entityType),
    // withTable(entityType),
  )
}

export const ASSETS_VIEW_STORE = getAssetsStore('assets');
export const COVERAGE_VIEW_STORE = getCoverageStore('contracts');


export const ENTITY_ROUTES: Routes = [
  {
    path: 'assets',
    loadComponent: () => import('./entity-list-view-wrapper.component').then(m => m.EntityListViewWrapperComponent),
    providers: [

      {
        provide: ENTITY_VIEW_SIGNAL_STORE,
        useFactory: () => new ASSETS_VIEW_STORE(),
        deps: [Store]
      }
    ]
  },
  {
    path: 'coverage',
    loadComponent: () => import('./entity-list-view-wrapper.component').then(m => m.EntityListViewWrapperComponent),
    providers: [
      {
        provide: ENTITY_VIEW_SIGNAL_STORE,
        useFactory:() => new COVERAGE_VIEW_STORE(),
        deps: [Store]
      }
    ]
  },
];
