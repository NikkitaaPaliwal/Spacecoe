import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UrlService } from '../url.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FormsModule
    , ReactiveFormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent implements OnInit {

  // searchQuery: string = '';
  // showSuggestions: boolean = false;
  // suggestions: any[] = [];

  // constructor(
  //   private router: Router,
  //   private route: ActivatedRoute,
  //   private urlService: UrlService
  // ) {}

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     const headline = params['headline'];
  //     if (headline) {
  //       const path = this.isInvestmentHeadline(headline) ? 'investmentandfunding' : 'industryandpartnerships';
  //       this.router.navigate([`${path}/${headline}`]);
  //     }
  //   });
  // }

  // search(): void {
  //   if (this.searchQuery.length >= 1) {
  //     this.showSuggestions = true;
  //     Promise.all([
  //       this.urlService.getInvestmentEntries(),
  //       this.urlService.getIndustryEntries()
  //     ]).then(([investmentEntries, industryEntries]) => {
  //       const allEntries = [...investmentEntries, ...industryEntries];
  //       this.suggestions = allEntries.map(entry => {
  //         const match = this.checkEntryForMatch(entry);
  //         return match ? { ...entry, snippet: match.snippet } : null;
  //       }).filter(entry => entry !== null);
  //     });
  //   } else {
  //     this.showSuggestions = false;
  //     this.suggestions = [];
  //   }
  // }

  // redirectToContent(entry: any): void {
  //   const path = this.isInvestmentType(entry) ? 'investmentandfunding' : 'industryandpartnerships';
  //   const headline = this.generateId(entry.fields.headline);
  //   const queryParams = { scrollId: headline };
  //   this.router.navigate([`${path}/${headline}`], { queryParams }).then(() => {
  //     // Optional: Scroll logic if needed after navigation
  //   });
  // }

  // isInvestmentType(entry: any): boolean {
  //   return entry.sys.contentType.sys.id === 'investment';
  // }

  // isInvestmentHeadline(headline: string): boolean {
  //   return headline.toLowerCase().includes('investment');
  // }

  // checkEntryForMatch(entry: any): { snippet: string } | null {
  //   const fieldsToSearch = ['headline', 'detail', 'impact', 'link', 'contact', 'date', 'country'];
  //   for (const field of fieldsToSearch) {
  //     if (entry.fields[field] && entry.fields[field].toLowerCase().includes(this.searchQuery.toLowerCase())) {
  //       return {
  //         snippet: this.getSnippet(entry.fields[field], this.searchQuery)
  //       };
  //     }
  //   }
  //   return null;
  // }

  // getSnippet(text: string, query: string): string {
  //   const queryIndex = text.toLowerCase().indexOf(query.toLowerCase());
  //   if (queryIndex === -1) return '';
  //   const start = Math.max(0, queryIndex - 30);
  //   const end = Math.min(text.length, queryIndex + query.length + 30);
  //   return (start > 0 ? '...' : '') + text.substring(start, end) + (end < text.length ? '...' : '');
  // }

  // generateId(headline: string): string {
  //   return headline.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
  // }

  activeTab: string = '';
  searchQuery: string = '';
  showSuggestions: boolean = false;
  suggestions: any[] = [];
  tabs: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private urlService: UrlService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const headline = params['headline'];
      if (headline) {
        const path = this.isInvestmentHeadline(headline) ? 'investmentandfunding' : 'industryandpartnerships';
        this.router.navigate([`${path}/${headline}`]);
      }
    });

    this.urlService.getTabs().then(tabs => {
      this.tabs = tabs;
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
        this.urlService.getPolicyandregulationchangeEntries(),
        this.urlService.getTabs()
      ]).then(([investmentEntries, industryEntries, otherEntries, startupEntries, competitorEntries, otherEventEntries, scitechadvancementEntries, policyregulationchangeEntries, tabs]) => {
        const allEntries = [...investmentEntries, ...industryEntries, ...otherEntries, ...startupEntries, ...competitorEntries, ...otherEventEntries, ...scitechadvancementEntries, ...policyregulationchangeEntries, ...tabs];
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

  navigateTo(section: string): void {
    // Navigate to the route based on the section argument
    this.activeTab = section;
    this.router.navigate([section]);
  }

  scrollToTeam(): void {
    this.activeTab = 'team';
    this.router.navigate(['/mainpage'], { fragment: 'team' });
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToMainpage(): void {
    this.router.navigate(['/mainpage']);
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
    const fieldsToSearch = ['headline', 'detail', 'impact', 'link', 'contact', 'date', 'country', 'startupcapability', 'competitor', 'registrationfee', 'heading'];
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

  isSearchVisible = false;

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

}
