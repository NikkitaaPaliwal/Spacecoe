import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild, HostListener,OnInit, ViewChildren } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UrlService } from '../url.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-globe',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.css'],
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule, ReactiveFormsModule]
})
export class GlobeComponent implements AfterViewInit {
  // Reference to the video element
  @ViewChildren('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  policyupdate: Entry<any>[] = [];
  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit() {
    this.urlService.getPolicyUpdate().then(policyupdate => {
      this.policyupdate = policyupdate;
    });
  }

  // Listen to all clicks on the document
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    this.toggleVideo();
  }

  // Toggles play/pause on the video element
  toggleVideo(): void {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
}
