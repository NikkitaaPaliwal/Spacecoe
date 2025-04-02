import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
  standalone: true,
  imports: [HeaderComponent, CommonModule],
})
export class SolutionsComponent implements OnInit, OnDestroy {
  eudrHelperLink: string = 'https://goto.now/qAeV1'; 
  images: string[] = [
    'assets/images/polygon.png',
    'assets/images/satellite.png',
  ]; 
  currentImage: string = this.images[0]; 
  currentIndex: number = 0; 
  intervalId: any; 

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
