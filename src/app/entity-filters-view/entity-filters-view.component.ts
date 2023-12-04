import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-entity-filters-view',
  templateUrl: './entity-filters-view.component.html',
  styleUrls: ['./entity-filters-view.component.css'],
  imports: [NgFor]
})
export class EntityFiltersViewComponent implements OnInit {
  @Input() title: string = '';
  @Input() filters: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
