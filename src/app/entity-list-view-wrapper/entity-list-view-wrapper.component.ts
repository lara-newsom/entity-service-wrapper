import { Component, inject } from '@angular/core';
import { AsyncPipe, NgComponentOutlet, NgIf } from '@angular/common';
import { ENTITY_VIEW_STORE } from '../entity-view-service';
import { EntityBannerViewComponent } from '../entity-banner-view/entity-banner-view.component';
import { EntityFiltersViewComponent } from '../entity-filters-view/entity-filters-view.component';
import { EntitySubMenuViewComponent } from '../entity-sub-menu-view/entity-sub-menu-view.component';
import { EntityTableViewComponent } from '../entity-table-view/entity-table-view.component';

@Component({
  standalone: true,
  selector: 'app-entity-list-view-wrapper',
  templateUrl: './entity-list-view-wrapper.component.html',
  styleUrls: ['./entity-list-view-wrapper.component.css'],
  imports: [
    NgComponentOutlet,
    NgIf,
    AsyncPipe,
  ]
})
export class EntityListViewWrapperComponent {
  readonly entityViewService = inject(ENTITY_VIEW_STORE);
  components = this.entityViewService.components;

  // moving these here so they do not lazy load when the routes initialize however this may negate the benefit of ngComponentOutlet
  readonly ENTITY_BANNER = EntityBannerViewComponent;
  readonly ENTITY_FILTERS = EntityFiltersViewComponent;
  readonly ENTITY_SUBMENU = EntitySubMenuViewComponent;
  readonly ENTITY_TABLE = EntityTableViewComponent;
}
