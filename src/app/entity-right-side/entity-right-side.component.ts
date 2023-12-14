import { Component, inject } from '@angular/core';
import { ENTITY_TYPE, ENTITY_VIEW_SIGNAL_STORE } from '../injection-tokens';
import { NgComponentOutlet, NgFor, NgIf } from '@angular/common';
import { EntityTableViewComponent } from '../entity-table-view/entity-table-view.component';
import { EntityBannerViewComponent } from '../entity-banner-view/entity-banner-view.component';

@Component({
  selector: 'app-entity-right-side',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgComponentOutlet,
  ],
  templateUrl: './entity-right-side.component.html',
  styleUrl: './entity-right-side.component.css'
})
export class EntityRightSideComponent {
  readonly entityViewService = inject(ENTITY_VIEW_SIGNAL_STORE);
  entityType = inject(ENTITY_TYPE);


  banners = this.entityViewService.banners;
  tableData = this.entityViewService.tableData;
  readonly ENTITY_TABLE = EntityTableViewComponent;
  readonly ENTITY_BANNER = EntityBannerViewComponent;
}
