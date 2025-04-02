import { ChangeDetectorRef, Component } from '@angular/core';
import { AutoComponent } from '../auto/auto.component';
import { CommonModule } from '@angular/common';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-guild',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guild.component.html',
  styleUrl: './guild.component.css'
})
export class GuildComponent {

  isVisible = false;
  currentPopup: string | null = null;

  showPopup(type: string) {
    this.currentPopup = type;
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
    this.currentPopup = null; 
  }


  // -------------------------------------

  scale: number = 1; // Initial scale

  zoomIn() {
    this.scale += 0.1; // Increment scale
  }

  zoomOut() {
    this.scale = Math.max(1, this.scale - 0.1); // Decrement scale, ensuring it doesn't go below 1
  }



}
