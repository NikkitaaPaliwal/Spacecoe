import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacecircleComponent } from './spacecircle.component';

describe('SpacecircleComponent', () => {
  let component: SpacecircleComponent;
  let fixture: ComponentFixture<SpacecircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacecircleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpacecircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
