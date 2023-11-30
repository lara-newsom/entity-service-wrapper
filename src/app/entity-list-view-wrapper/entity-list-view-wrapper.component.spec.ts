import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityListViewWrapperComponent } from './entity-list-view-wrapper.component';

describe('EntityListViewWrapperComponent', () => {
  let component: EntityListViewWrapperComponent;
  let fixture: ComponentFixture<EntityListViewWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityListViewWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityListViewWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
