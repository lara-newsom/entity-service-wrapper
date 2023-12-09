import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EntityService {
  readonly ASSETS_DATA = [
    'asset 1',
    'asset 2',
    'asset 3',
    'asset 4',
    'asset 5',
    'asset 6',
  ];

  readonly CONTRACT_DATA = [
    'contract 1',
    'contract 2',
    'contract 3',
    'contract 4',
  ];

  readonly ASSETS_FILTERS = [
    'product type',
    'asset date',
    'asset end of life',
    'asset type',
  ];

  readonly CONTRACT_FILTERS = [
    'contract type',
    'contract end date',
    'contract state date',
    'contract services',
  ];

  readonly ASSETS_SIDE_NAV = ['all assets', 'hardware eol', 'software eol'];
  readonly CONTRACTS_SIDE_NAV = ['coverage', 'coverage part 2'];

  readonly ASSETS_BANNERS = ['BIGGEST BANNER', 'other banner'];

  fetchEntityData(entityType: string): Observable<string[]> {
    // we can use the entity type to create the request to the api
    // this nonsense is just placeholder
    return entityType === 'assets' ? of(this.ASSETS_DATA) : of(this.CONTRACT_DATA);
  }

  fetchEntityFilters(entityType: string): Observable<string[]>{
    return entityType === 'assets' ? of(this.ASSETS_FILTERS) : of(this.CONTRACT_FILTERS);
  }

  fetchEntityBanners(entityType: string): Observable<string[]>{
    return entityType === 'assets' ? of(this.ASSETS_BANNERS) : of([]);
  }

  fetchEntitySideNav(entityType: string): Observable<string[]>{
    return entityType === 'assets' ? of(this.ASSETS_SIDE_NAV) : of(this.CONTRACTS_SIDE_NAV);
  }
}
