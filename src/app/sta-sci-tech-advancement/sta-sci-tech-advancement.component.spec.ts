import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaSciTechAdvancementComponent } from './sta-sci-tech-advancement.component';

describe('StaSciTechAdvancementComponent', () => {
  let component: StaSciTechAdvancementComponent;
  let fixture: ComponentFixture<StaSciTechAdvancementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaSciTechAdvancementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaSciTechAdvancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
