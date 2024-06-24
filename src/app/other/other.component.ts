import { Component,OnInit, AfterViewInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';

import { ActivatedRoute} from '@angular/router';
import { UrlService } from '../url.service';






@Component({
  selector: 'app-other',
  standalone: true,
  imports: [
    FormsModule,ReactiveFormsModule,CommonModule
    ],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent implements OnInit, AfterViewInit{
  others: any[] = [];

  constructor(private urlService: UrlService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const headline = params['headline'];
      console.log('Headline:', headline); // Log the received headline
      console.log('Current route params:', this.route.snapshot.params);
    });

    this.urlService.getOtherEntries().then(others => {
      this.others = others;
      console.log('Fetched others:', this.others); // Log fetched other entries
    });
  }

  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      console.log('Received parameters:', params); // Log the received parameters
      const headline = params['headline'];
      console.log('Received headline:', headline); // Log the received headline
      if (headline) {
        setTimeout(() => {
          const element = document.getElementById(this.generateId(headline));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
          }
        }, 1000); // Adjust the timeout as needed
      }
    });
  }

  generateId(headline: string): string {
    return headline.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
  }
}
