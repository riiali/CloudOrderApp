import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOrderComponent } from './group-order.component';

describe('GroupOrderComponent', () => {
  let component: GroupOrderComponent;
  let fixture: ComponentFixture<GroupOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
