import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyAndRegulationComponent } from './policy-and-regulation.component';

describe('PolicyAndRegulationComponent', () => {
  let component: PolicyAndRegulationComponent;
  let fixture: ComponentFixture<PolicyAndRegulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyAndRegulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolicyAndRegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
