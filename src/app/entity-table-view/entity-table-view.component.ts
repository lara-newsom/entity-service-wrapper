import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-entity-table-view',
  templateUrl: './entity-table-view.component.html',
  styleUrls: ['./entity-table-view.component.css']
})
export class EntityTableViewComponent implements OnInit {
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
