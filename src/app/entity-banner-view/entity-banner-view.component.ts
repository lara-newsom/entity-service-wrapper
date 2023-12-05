import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-entity-banner-view',
  templateUrl: './entity-banner-view.component.html',
  styleUrls: ['./entity-banner-view.component.css'],
  imports: [NgFor]
})
export class EntityBannerViewComponent implements OnInit {
  @Input() title: string = '';
  @Input() banners: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
