import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityFiltersViewComponent } from './entity-filters-view.component';

describe('EntityFiltersViewComponent', () => {
  let component: EntityFiltersViewComponent;
  let fixture: ComponentFixture<EntityFiltersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityFiltersViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityFiltersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
