import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-entity-banner-view',
  templateUrl: './entity-banner-view.component.html',
  styleUrls: ['./entity-banner-view.component.css']
})
export class EntityBannerViewComponent implements OnInit {
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
