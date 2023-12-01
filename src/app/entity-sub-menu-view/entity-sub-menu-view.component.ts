import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-entity-sub-menu-view',
  templateUrl: './entity-sub-menu-view.component.html',
  styleUrls: ['./entity-sub-menu-view.component.css'],
  imports: [NgFor]
})
export class EntitySubMenuViewComponent implements OnInit {
  @Input() sideNavOptions: string[] = [];
  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
