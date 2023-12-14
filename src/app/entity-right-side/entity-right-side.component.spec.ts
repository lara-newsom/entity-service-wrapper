import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityRightSideComponent } from './entity-right-side.component';

describe('EntityRightSideComponent', () => {
  let component: EntityRightSideComponent;
  let fixture: ComponentFixture<EntityRightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntityRightSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntityRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
