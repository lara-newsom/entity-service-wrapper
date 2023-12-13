import { Component, inject } from '@angular/core';
import { AsyncPipe, NgComponentOutlet, NgIf } from '@angular/common';
import { EntityBannerViewComponent } from '../entity-banner-view/entity-banner-view.component';
import { EntityFiltersViewComponent } from '../entity-filters-view/entity-filters-view.component';
import { EntitySubMenuViewComponent } from '../entity-sub-menu-view/entity-sub-menu-view.component';
import { EntityTableViewComponent } from '../entity-table-view/entity-table-view.component';
import { ENTITY_TYPE, ENTITY_VIEW_SIGNAL_STORE } from '../injection-tokens';
import { signalStore, withHooks, withState } from '@ngrx/signals';
import { Store } from '@ngrx/store';
import { withBanners, withFilters, withSideNav, withTable } from '../entity-list-view-signal-store-service';
import { entityDataChange, loadListView } from '../state/actions';

@Component({
  standalone: true,
  selector: 'app-entity-list-view-wrapper',
  templateUrl: './entity-list-view-wrapper.component.html',
  styleUrls: ['./entity-list-view-wrapper.component.css'],
  imports: [
    NgComponentOutlet,
    NgIf,
  ],
})
export class EntityListViewWrapperComponent {
  readonly entityViewService = inject(ENTITY_VIEW_SIGNAL_STORE);
  readonly store = inject(Store);
  banners = this.entityViewService.banners;
  filters = this.entityViewService.filters;
  sideNavOptions = this.entityViewService.sideNavOptions;
  tableData = this.entityViewService.tableData;
  entityType = inject(ENTITY_TYPE);

  downloadCsv() {
    // get methods working
    // this.entityViewService.downloadCsv();
  }

  // moving these here so they do not lazy load when the routes initialize however this may negate the benefit of ngComponentOutlet
  readonly ENTITY_BANNER = EntityBannerViewComponent;
  readonly ENTITY_FILTERS = EntityFiltersViewComponent;
  readonly ENTITY_SUBMENU = EntitySubMenuViewComponent;
  readonly ENTITY_TABLE = EntityTableViewComponent;
  changeData(){
    this.store.dispatch(entityDataChange({
      entityData: [
        'BRAND',
        'NEW',
        'TABLE',
        'DATA',
      ],
      entityType: this.entityType
    }))
  }
}
