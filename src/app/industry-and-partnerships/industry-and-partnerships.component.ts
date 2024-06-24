import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-industry-and-partnerships',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industry-and-partnerships.component.html',
  styleUrl: './industry-and-partnerships.component.css'
})
export class IndustryAndPartnershipsComponent implements OnInit, AfterViewInit{
  
  // industries: any[] = [];

  // constructor(private urlService: UrlService, private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     const headline = params['headline'];
  //     console.log('Headline:', headline); // Log the received headline
  //   });

  //   this.urlService.getIndustryEntries().then(industries => {
  //     this.industries = industries;
  //   });
  // }

  // ngAfterViewInit(): void {
  //   this.route.params.subscribe(params => {
  //     const headline = params['headline'];
  //     if (headline) {
  //       setTimeout(() => {
  //         const element = document.getElementById(this.generateId(headline));
  //         console.log('Element:', element); // Log the retrieved element
          
  //         if (element) {
  //           console.log('Scrolling...'); // Log scrolling attempt
  //           element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         }
  //       }, 1000);
  //     }
  //   });
  // }

  // generateId(headline: string): string {
  //   return headline.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
  // }
  


  industries: any[] = [];

  constructor(private urlService: UrlService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const headline = params['headline'];
      console.log('Headline:', headline); // Log the received headline
    });

    this.urlService.getIndustryEntries().then(industries => {
      this.industries = industries;
    });
  }

  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      const headline = params['headline'];
      if (headline) {
        setTimeout(() => {
          const element = document.getElementById(this.generateId(headline));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
          }
        }, 1000);
      }
    });
  }

  generateId(headline: string): string {
    return headline.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
  }
}
