import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Entry } from 'contentful';
import { UrlService } from '../url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-podcasts',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponents implements OnInit {
  homes: Entry<any>[] = [];

  constructor(private urlService: UrlService, private router: Router) { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      const video = document.querySelector('video');
      
      if (video) {
        video.addEventListener('mouseenter', function() {
          video.play();
      });
      
      video.addEventListener('mouseleave', function() {
        });
        
        video.addEventListener('mouseleave', function() {
          video.pause();
        });
      }
  });
  }
  }
  
