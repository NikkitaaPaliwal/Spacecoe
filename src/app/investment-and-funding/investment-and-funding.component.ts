import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investment-and-funding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-and-funding.component.html',
  styleUrl: './investment-and-funding.component.css'
})
export class InvestmentAndFundingComponent implements OnInit, AfterViewInit{
  // investments: any[] = [];

  // constructor(private urlService: UrlService, private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     const headline = params['headline'];
  //     console.log('Headline:', headline); // Log the received headline
  //     console.log('Current route params:', this.route.snapshot.params);
  //   });

  //   this.urlService.getInvestmentEntries().then(investments => {
  //     this.investments = investments;
  //     console.log('Fetched investments:', this.investments); // Log fetched investments
  //   });
  // }

  // ngAfterViewInit(): void {
  //   this.route.params.subscribe(params => {
  //     console.log('Received parameters:', params); // Log the received parameters
  //     const headline = params['headline'];
  //     console.log('Received headline:', headline); // Log the received headline
  //     if (headline) {
  //       setTimeout(() => {
  //         const element = document.getElementById(this.generateId(headline));
  //         if (element) {
  //           element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  //         }
  //       }, 1000); // Adjust the timeout as needed
  //     }
  //   });
  // }

  // generateId(headline: string): string {
  //   return headline.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
  // }



  investments: any[] = [];

  constructor(private urlService: UrlService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const headline = params['headline'];
      console.log('Headline:', headline); // Log the received headline
    });

    this.urlService.getInvestmentEntries().then(investments => {
      this.investments = investments;
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

