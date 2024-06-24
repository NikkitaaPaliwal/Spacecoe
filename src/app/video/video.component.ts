import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UrlService } from '../url.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent  implements OnInit{
  futuresatellites: Entry<any>[] = [];
  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
    this.urlService.getFuturesatellitesEntries().then(futuresatellites => {
      this.futuresatellites = futuresatellites;
    });
  }
}
