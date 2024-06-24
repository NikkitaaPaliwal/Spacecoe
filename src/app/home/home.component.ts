import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Entry } from 'contentful';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  homes: Entry<any>[] = [];

  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
    this.urlService.gethomeEntries().then(homes => { 
      this.homes = homes;
    });
  }
}
