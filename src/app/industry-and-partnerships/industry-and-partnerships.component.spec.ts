import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryAndPartnershipsComponent } from './industry-and-partnerships.component';

describe('IndustryAndPartnershipsComponent', () => {
  let component: IndustryAndPartnershipsComponent;
  let fixture: ComponentFixture<IndustryAndPartnershipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryAndPartnershipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustryAndPartnershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
