import { AfterViewInit, Component, OnInit} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UrlService } from '../url.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-startup',
  standalone: true,
  imports: [
    FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './startup.component.html',
  styleUrl: './startup.component.css'
})
export class StartupComponent implements OnInit, AfterViewInit{
  startups: any[] = [];

  constructor(private urlService: UrlService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const headline = params['headline'];
      console.log('Headline:', headline); // Log the received headline
      console.log('Current route params:', this.route.snapshot.params);
    });

    this.urlService.getStartupEntries().then(startups => {
      this.startups = startups;
      console.log('Fetched startups:', this.startups); // Log fetched startup entries
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


  



  
