import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentAndFundingComponent } from './investment-and-funding.component';

describe('InvestmentAndFundingComponent', () => {
  let component: InvestmentAndFundingComponent;
  let fixture: ComponentFixture<InvestmentAndFundingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentAndFundingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentAndFundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
