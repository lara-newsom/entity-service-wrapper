import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import { entityBannersFetchSuccess, entityDataFetchSuccess, entityFiltersFetchSuccess, entitySideNavFetchSuccess } from './actions';

export const ENTITY_STATE = 'entity state';
export interface AppState {
  filters: {
    [key: string]: string[]
  },
  data: {
    [key: string]: string[]
  },
  banners: {
    [key: string]: string[]
  },
  sideNavOptions: {
    [key: string]: string[]
  }
}

const initialState: AppState = {
  filters: {},
  data: {},
  banners: {},
  sideNavOptions: {}
};

export const entityReducer = createReducer(
  initialState,
  on(entityDataFetchSuccess, (state, {entityType, entityData}) => ({
    ...state,
    data: {
      ...state.data,
      [entityType]: entityData
    }
  })),
  on(entityBannersFetchSuccess, (state, {entityType, entityBanners}) => ({
    ...state,
    banners: {
      ...state.banners,
      [entityType]: entityBanners
    }
  })),
  on(entityFiltersFetchSuccess, (state, {entityType, entityFilters}) => ({
    ...state,
    filters: {
      ...state.filters,
      [entityType]: entityFilters
    }
  })),
  on(entitySideNavFetchSuccess, (state, {entityType, entitySideNav}) => ({
    ...state,
    sideNavOptions: {
      ...state.sideNavOptions,
      [entityType]: entitySideNav
    }
  })),
);

const entityStateSelector = createFeatureSelector<AppState>(ENTITY_STATE);

export const selectFilters = createSelector(
  entityStateSelector,
  (state) => state.filters
);
export const selectData = createSelector(
  entityStateSelector,
  (state) => state.data
);
export const selectBanners = createSelector(
  entityStateSelector,
  (state) => state.banners
);
export const selectSideNav = createSelector(
  entityStateSelector,
  (state) => state.sideNavOptions
)

export const selectEntityData = (entityType: string) => createSelector(
  selectData,
  (state) => state[entityType]
);

export const selectEntityFilters = (entityType: string) => createSelector(
  selectFilters,
  (state) => state[entityType]
);

export const selectEntityBanners = (entityType: string) => createSelector(
  selectBanners,
  (state) => {
    return state[entityType]
  }
);

export const selectEntitySideNav = (entityType: string) => createSelector(
  selectSideNav,
  (state) => state[entityType]
);

