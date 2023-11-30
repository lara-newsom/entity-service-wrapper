import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitySubMenuViewComponent } from './entity-sub-menu-view.component';

describe('EntitySubMenuViewComponent', () => {
  let component: EntitySubMenuViewComponent;
  let fixture: ComponentFixture<EntitySubMenuViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitySubMenuViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntitySubMenuViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
