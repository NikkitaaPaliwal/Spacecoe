import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-policy-and-regulation',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './policy-and-regulation.component.html',
  styleUrl: './policy-and-regulation.component.css'
})
export class PolicyAndRegulationComponent implements OnInit{

  searchQuery: string = '';
  showSuggestions: boolean = false;
  suggestions: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private urlService: UrlService
  ) {}
 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const headline = params['headline'];
      if (headline) {
        const path = this.isInvestmentHeadline(headline) ? 'investmentandfunding' : 'industryandpartnerships';
        this.router.navigate([`${path}/${headline}`]);
      }
    });
  }

  search(): void {
    if (this.searchQuery.length >= 1) {
      this.showSuggestions = true;
      Promise.all([
        this.urlService.getInvestmentEntries(),
        this.urlService.getIndustryEntries(),
        this.urlService.getOtherEntries(),
        this.urlService.getStartupEntries(),
        this.urlService.getCompetitorEntries(),
        this.urlService.getOtherEventEntries(),
        this.urlService.getScitechadvancementEntries(),
        this.urlService.getPolicyandregulationchangeEntries()
      ]).then(([investmentEntries, industryEntries, otherEntries, startupEntries, competitorEntries, otherEventEntries, scitechadvancementEntries, policyregulationchangeEntries]) => {
        const allEntries = [...investmentEntries, ...industryEntries, ...otherEntries, ...startupEntries, ...competitorEntries, ...otherEventEntries, ...scitechadvancementEntries, ...policyregulationchangeEntries];
        this.suggestions = allEntries.map(entry => {
          const match = this.checkEntryForMatch(entry);
          return match ? { ...entry, snippet: match.snippet } : null;
        }).filter(entry => entry !== null);
      });
    } else {
      this.showSuggestions = false;
      this.suggestions = [];
    }
  }

  redirectToContent(entry: any): void {
    const headline = this.generateId(entry.fields.headline);
    const queryParams = { scrollId: headline };

    if (this.isOtherType(entry)) {
      this.router.navigate(['other', headline], { queryParams });
    } else if (this.isStartupType(entry)) {
      this.router.navigate(['startup', headline], { queryParams });
    } else if (this.isCompetitorType(entry)) {
      this.router.navigate(['competitor', headline], { queryParams });
    } else if (this.isOtherEventType(entry)) {
      this.router.navigate(['otherevent', headline], { queryParams });
    } else if (this.isScitechadvancementType(entry)) {
      this.router.navigate(['scitechadvancement', headline], { queryParams });
    } else if (this.isPolicyRegulationChangeType(entry)) {
      this.router.navigate(['policyandregulationchange', headline], { queryParams });
    } else {
      const path = this.isInvestmentType(entry) ? 'investmentandfunding' : 'industryandpartnerships';
      this.router.navigate([`${path}/${headline}`], { queryParams });
    }
  }

  isInvestmentType(entry: any): boolean {
    return entry.sys.contentType.sys.id === 'investment';
  }

  isOtherType(entry: any): boolean {
    return entry.sys.contentType.sys.id === 'other';
  }

  isStartupType(entry: any): boolean {
    return entry.sys.contentType.sys.id === 'startup';
  }

  isCompetitorType(entry: any): boolean {
    return entry.sys.contentType.sys.id === 'competitor';
  }

  isOtherEventType(entry: any): boolean {
    return entry.sys.contentType.sys.id === 'otherevent';
  }

  isScitechadvancementType(entry: any): boolean {
    return entry.sys.contentType.sys.id === 'scitechadvancement';
  }

  isPolicyRegulationChangeType(entry: any): boolean {
    return entry.sys.contentType.sys.id === 'policyandregulationchange';
  }

  isInvestmentHeadline(headline: string): boolean {
    return headline.toLowerCase().includes('investment');
  }

  checkEntryForMatch(entry: any): { snippet: string } | null {
    const fieldsToSearch = ['headline', 'detail', 'impact', 'link', 'contact', 'date', 'country', 'startupcapability', 'competitor', 'registrationfee'];
    for (const field of fieldsToSearch) {
      if (entry.fields[field] && entry.fields[field].toLowerCase().includes(this.searchQuery.toLowerCase())) {
        return {
          snippet: this.getSnippet(entry.fields[field], this.searchQuery)
        };
      }
    }
    return null;
  }

  getSnippet(text: string, query: string): string {
    const queryIndex = text.toLowerCase().indexOf(query.toLowerCase());
    if (queryIndex === -1) return '';
    const start = Math.max(0, queryIndex - 30);
    const end = Math.min(text.length, queryIndex + query.length + 30);
    return (start > 0 ? '...' : '') + text.substring(start, end) + (end < text.length ? '...' : '');
  }

  generateId(headline: string): string {
    return headline.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
  }
}


