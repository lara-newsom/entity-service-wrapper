import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { EntityService } from '../entity.service';
import { entityBannersFetchSuccess, entityDataFetchSuccess, entityFiltersFetchSuccess, entitySideNavFetchSuccess, loadListView } from './actions';

@Injectable()
export class EntityEffect {

  loadEntityData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadListView),
      mergeMap(({entityType}) => this.entityService.fetchEntityData(entityType)
        .pipe(
          map(entities => (entityDataFetchSuccess({entityData: entities, entityType}))),
          // obviously we would do some call state handling
        )
      )
    )
  );

  loadEntityFilters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadListView),
      mergeMap(({entityType}) => this.entityService.fetchEntityFilters(entityType)
        .pipe(
          map(entities => (entityFiltersFetchSuccess({entityFilters: entities, entityType}))),
          // obviously we would do some call state handling
        )
      )
    )
  );

  loadEntityBanners$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadListView),
      mergeMap(({entityType}) => this.entityService.fetchEntityBanners(entityType)
        .pipe(
          map(entities => (entityBannersFetchSuccess({entityBanners: entities, entityType}))),
          // obviously we would do some call state handling
        )
      )
    )
  );

  // loadEntitySideNav$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loadListView),
  //     mergeMap(({entityType}) => this.entityService.fetchEntitySideNav(entityType)
  //       .pipe(
  //         map(entities => (entitySideNavFetchSuccess({entitySideNav: entities, entityType}))),
  //         // obviously we would do some call state handling
  //       )
  //     )
  //   )
  // );

  constructor(
    private actions$: Actions,
    private entityService: EntityService
  ) {}
}
