import { createAction, props } from '@ngrx/store';

export const loadListView = createAction('[Entity List View] Load List View Route', props<{entityType: string}>());
export const entityDataFetchSuccess = createAction('[Entity Effect]Data Fetch Success', props<{entityData: string[], entityType: string}>())
export const entityFiltersFetchSuccess = createAction('[Entity Effect]Filter Fetch Success', props<{entityFilters: string[], entityType: string}>())
export const entitySideNavFetchSuccess = createAction('[Entity Effect]Data SideNav Success', props<{entitySideNav: string[], entityType: string}>())
export const entityBannersFetchSuccess = createAction('[Entity Effect]Data Banners Success', props<{entityBanners: string[], entityType: string}>())
