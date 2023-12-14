import { Component, inject } from '@angular/core';
import { AsyncPipe, NgComponentOutlet, NgIf } from '@angular/common';
import { EntityBannerViewComponent } from '../entity-banner-view/entity-banner-view.component';
import { EntityFiltersViewComponent } from '../entity-filters-view/entity-filters-view.component';
import { EntitySubMenuViewComponent } from '../entity-sub-menu-view/entity-sub-menu-view.component';
import { EntityTableViewComponent } from '../entity-table-view/entity-table-view.component';
import { ENTITY_SIDE_NAV_OPTIONS, ENTITY_TYPE, ENTITY_VIEW_SIGNAL_STORE, TRACK_TYPE } from '../injection-tokens';
import { Store } from '@ngrx/store';
import { entityDataChange, loadListView } from '../state/actions';
import { EntityRightSideComponent } from '../entity-right-side/entity-right-side.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-entity-list-view-wrapper',
  templateUrl: './entity-list-view-wrapper.component.html',
  styleUrls: ['./entity-list-view-wrapper.component.css'],
  imports: [
    RouterOutlet,
    NgComponentOutlet,
    NgIf,
    EntityRightSideComponent,
  ],
})
export class EntityListViewWrapperComponent {
  readonly sideNavOptions = inject(ENTITY_SIDE_NAV_OPTIONS);
  readonly store = inject(Store);
  readonly signalStore = inject(ENTITY_VIEW_SIGNAL_STORE);
  filters = this.signalStore.filters;
  trackType = inject(TRACK_TYPE);
  entityType = inject(ENTITY_TYPE);

  // moving these here so they do not lazy load when the routes initialize however this may negate the benefit of ngComponentOutlet
  readonly ENTITY_FILTERS = EntityFiltersViewComponent;
  readonly ENTITY_SUBMENU = EntitySubMenuViewComponent;
}
