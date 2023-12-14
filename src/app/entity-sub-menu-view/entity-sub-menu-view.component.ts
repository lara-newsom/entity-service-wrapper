import { NgFor } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { SideNavItem, TRACK_TYPE } from '../injection-tokens';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-entity-sub-menu-view',
  templateUrl: './entity-sub-menu-view.component.html',
  styleUrls: ['./entity-sub-menu-view.component.css'],
  imports: [
    NgFor,
    RouterLink,
  ]
})
export class EntitySubMenuViewComponent implements OnInit {
  @Input() sideNavOptions: SideNavItem[] = [];
  @Input() title: string = '';
  trackType = inject(TRACK_TYPE)
  constructor() {
    console.log('side nav constructor')
  }

  ngOnInit(): void {
  }

}
