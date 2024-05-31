import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationFlowComponent } from './authentication-flow.component';

describe('AuthenticationFlowComponent', () => {
  let component: AuthenticationFlowComponent;
  let fixture: ComponentFixture<AuthenticationFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthenticationFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
