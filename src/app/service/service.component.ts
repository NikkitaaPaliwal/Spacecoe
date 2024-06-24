import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Entry } from 'contentful';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent implements OnInit{
  services: Entry<any>[] = [];

  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
    this.urlService.getserviceEntries().then(services => { 
      this.services = services;
    });
  }
}
