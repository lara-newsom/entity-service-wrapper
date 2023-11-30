import { Component, inject } from '@angular/core';
import { AsyncPipe, NgComponentOutlet, NgIf } from '@angular/common';
import { ENTITY_VIEW_STORE } from '../entity-view-service';

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
  vm$ = this.entityViewService.components$;
}
