import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ENTITY_TYPE, SideNavItem } from './injection-tokens';
import { signalStore, withHooks } from '@ngrx/signals';
import { Store } from '@ngrx/store';
import { withSideNav, withFilters, withTable, withBanners } from './entity-list-view-signal-store-service';
import { loadListView } from './state/actions';

export const ASSETS_VIEW_STORE = signalStore(
  withHooks({
    onInit(){
      const store = inject(Store);
      const entityType = inject(ENTITY_TYPE);

      store.dispatch(loadListView({entityType}))
    }
  }),
  withSideNav(),
  withFilters(),
  withTable(),
  withBanners()
);

export const COVERAGE_VIEW_STORE = signalStore(
  withHooks({
    onInit(){
      const store = inject(Store);
      const entityType = inject(ENTITY_TYPE);

      console.log('in contract store')
      store.dispatch(loadListView({entityType}))
    }
  }),
  withSideNav(),
  withFilters(),
  withTable(),
);

@Injectable({providedIn: 'root'})
export class EntityService {
  readonly ASSETS_DATA = [
    'Asset 1',
    'Asset 2',
    'Asset 3',
    'Asset 4',
    'Asset 5',
    'Asset 6',
  ];

  readonly CONTRACT_DATA = [
    'Contract 1',
    'Contract 2',
    'Contract 3',
    'Contract 4',
  ];

  readonly SECURITY_ADVISORY_DATA = [
    'Security Advisory 1',
    'Security Advisory 2',
    'Security Advisory 3',
    'Security Advisory 4',
  ];

  readonly FIELD_NOTICE_DATA = [
    'Field Notice 1',
    'Field Notice 2',
    'Field Notice 3',
    'Field Notice 4',
  ];

  readonly ASSETS_FILTERS = [
    'product type',
    'asset date',
    'asset end of life',
    'asset type',
  ];

  readonly CONTRACT_FILTERS = [
    'Contract Type',
    'Contract End Date',
    'Contract State Date',
    'Contract Services',
  ];

  readonly SECURITY_ADVISORY_FILTERS = [
    'Security Advisory Type',
    'Security Advisory End Date',
    'Security Advisory Start Date',
  ];

  readonly FIELD_NOTICE_FILTERS = [
    'Field Notice Type',
    'Field Notice Last Date of Service',
    'Field Notice Size',
  ];

  readonly ASSETS_BANNERS = ['BIGGEST BANNER', 'other banner'];

  fetchEntityData(entityType: string): Observable<string[]> {
    // we can use the entity type to create the request to the api
    // this nonsense is just placeholder

    switch(entityType){
      case 'all-assets':
        return of(this.ASSETS_DATA);
      case 'security-advisories':
        return of(this.SECURITY_ADVISORY_DATA);
      case 'field-notices':
        return of(this.FIELD_NOTICE_DATA);
      case 'contracts':
        return of(this.CONTRACT_DATA);
      default:
        return of([]);
    }
  }

  fetchEntityFilters(entityType: string): Observable<string[]>{
    switch(entityType){
      case 'all-assets':
        return of(this.ASSETS_FILTERS);
      case 'security-advisories':
        return of(this.SECURITY_ADVISORY_FILTERS);
      case 'field-notices':
        return of(this.FIELD_NOTICE_FILTERS);
      case 'contracts':
        return of(this.CONTRACT_FILTERS);
      default:
        return of([]);
    }
  }

  fetchEntityBanners(entityType: string): Observable<string[]>{
    return entityType === 'assets' ? of(this.ASSETS_BANNERS) : of([]);
  }
}
