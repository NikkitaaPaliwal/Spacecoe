
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-other-event',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './other-event.component.html',
  styleUrl: './other-event.component.css'
})
export class OtherEventComponent implements OnInit, AfterViewInit{
  otherEvents: any[] = [];

  constructor(private urlService: UrlService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const headline = params['headline'];
      console.log('Headline:', headline); // Log the received headline
      console.log('Current route params:', this.route.snapshot.params);
    });

    this.urlService.getOtherEventEntries().then(otherEvents => {
      this.otherEvents = otherEvents;
      console.log('Fetched other events:', this.otherEvents); // Log fetched other event entries
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
