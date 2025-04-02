import { Component, ViewEncapsulation, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { jsPDF } from 'jspdf';
import { UrlService } from '../url.service';
import { HeaderComponent } from '../header/header.component';

interface Section {
  id: string;
  title: string;
}

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, HeaderComponent, MatSnackBarModule]
})
export class PublicationsComponent implements OnInit {
  title = 'New Horizons for NewSpace';
  activeSection: string = 'introduction';
  isScrolled: boolean = false;
  reports: any[] = [];

  sections: Section[] = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'key-findings', title: 'Key Findings' }
  ];

  constructor(
    private snackBar: MatSnackBar,
    private urlService: UrlService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.urlService.getReportsummary().then(reports => {
      this.reports = reports;
      console.log("Full reports array:", JSON.stringify(this.reports, null, 2));
    });
    if (isPlatformBrowser(this.platformId)) {
      this.checkActiveSection();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 100;
      this.checkActiveSection();
    }
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    window.location.hash = sectionId;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  checkSidebarVisibility(): void {
    const articleSection = document.querySelector('.article-section');
    const sidebar = document.getElementById('sidebar');

    if (articleSection && sidebar) {
      const articleRect = articleSection.getBoundingClientRect();
      const sidebarRect = sidebar.getBoundingClientRect();

      if (articleRect.bottom > 0 && articleRect.top < window.innerHeight) {
        sidebar.style.opacity = '0';
      } else {
        sidebar.style.opacity = '1';
      }
    }
  }

  downloadContent() {
    const fileUrl = '../assets/gtmreport.pptx'; // Path to your file
    const fileName = 'gtmreport.pptx'; // Name of the downloaded file

    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = fileName;
    anchor.target = '_blank';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }


  printContent() {
    if (!isPlatformBrowser(this.platformId)) return;

    const scrollPosition = window.pageYOffset;
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'visible';
    document.body.classList.add('printing');

    setTimeout(() => {
      window.print();
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove('printing');
      window.scrollTo(0, scrollPosition);
      this.showNotification('Document prepared for printing');
    }, 250);
  }

  shareContent() {
    if (!isPlatformBrowser(this.platformId)) return;

    if (navigator.share) {
      navigator.share({
        title: this.title,
        text: 'Leveraging downstream space to revolutionize public service delivery',
        url: window.location.href
      }).catch(() => this.showNotification('Error sharing content'));
    } else {
      this.copyToClipboard(window.location.href);
    }
  }

  saveContent() {
    if (!isPlatformBrowser(this.platformId)) return;

    try {
      const articleData = {
        url: window.location.href,
        timestamp: new Date().toISOString(),
        title: this.title
      };
      localStorage.setItem('saved-article', JSON.stringify(articleData));
      this.showNotification('Article saved successfully');
    } catch (error) {
      this.showNotification('Error saving article');
    }
  }

  private copyToClipboard(text: string) {
    if (!isPlatformBrowser(this.platformId)) return;

    const dummy = document.createElement('input');
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    this.showNotification('URL copied to clipboard!');
  }

  private showNotification(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  private checkActiveSection() {
    if (!isPlatformBrowser(this.platformId)) return;

    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSection = section.id;
      }
    });

    if (currentSection && currentSection !== this.activeSection) {
      this.activeSection = currentSection;
      history.replaceState(null, '', `#${currentSection}`);
    }
  }
}