import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Entry } from 'contentful';
import { UrlService } from '../url.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-coreCommitee',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './coreCommitee.component.html',
  styleUrls: ['./coreCommitee.component.css']
})
export class CoreCommitee implements OnInit {
  homes: Entry<any>[] = [];

  @ViewChild('scrollContainer') private scrollContainer: ElementRef<HTMLDivElement>;

  constructor(private urlService: UrlService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlService.gethomeEntries().then(homes => {
      this.homes = homes;
    });
  }

  scroll(direction: 'left' | 'right'): void {
    const scrollAmount = direction === 'left' ? -300 : 300;
    this.scrollContainer.nativeElement.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }

  getMailTo(email: string) {
    return this.sanitizer.bypassSecurityTrustUrl(`mailto:${email}`);
  }
}
