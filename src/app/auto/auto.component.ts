import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';




@Component({
  selector: 'app-auto',
  standalone: true,
  imports: [FormsModule,
     ReactiveFormsModule,
    CommonModule,
    ],
  templateUrl: './auto.component.html',
  styleUrl: './auto.component.css',
  
})
export class AutoComponent {
  
  // isPopupVisible = false;

  // constructor(private cd: ChangeDetectorRef) {}

  // togglePopup() {
  //   this.isPopupVisible = !this.isPopupVisible;
  //   this.cd.detectChanges(); // Trigger change detection
  // }

  isVisible = false;
  currentPopup: string | null = null;

  showPopup(type: string) {
    this.currentPopup = type;
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
    this.currentPopup = null; // Reset the current popup
  }

}
