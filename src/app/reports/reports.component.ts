// reports.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { Router } from '@angular/router';

interface Report {
  id: number;
  tag: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ReportsComponent implements OnInit {
  report: any[] = [];

  constructor(private urlService: UrlService, private router: Router) {}

  navigateToPublications() {
    this.router.navigate(['/publications']);
  }
  ngOnInit() {
    this.urlService.getMainPageReport().then(report => {}); 
    
}
}