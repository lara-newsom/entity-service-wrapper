import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityBannerViewComponent } from './entity-banner-view.component';

describe('EntityBannerViewComponent', () => {
  let component: EntityBannerViewComponent;
  let fixture: ComponentFixture<EntityBannerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityBannerViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityBannerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
