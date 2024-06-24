import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyRegulationChangeComponent } from './policy-regulation-change.component';

describe('PolicyRegulationChangeComponent', () => {
  let component: PolicyRegulationChangeComponent;
  let fixture: ComponentFixture<PolicyRegulationChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyRegulationChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolicyRegulationChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
