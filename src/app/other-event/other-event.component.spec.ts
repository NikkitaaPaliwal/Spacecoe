import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherEventComponent } from './other-event.component';

describe('OtherEventComponent', () => {
  let component: OtherEventComponent;
  let fixture: ComponentFixture<OtherEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
