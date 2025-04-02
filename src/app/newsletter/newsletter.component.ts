import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Entry } from 'contentful';
import { UrlService } from '../url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class Newsletter implements OnInit {
  homes: Entry<any>[] = [];

  constructor(private urlService: UrlService, private router: Router) { }

  ngOnInit(): void {
    this.urlService.gethomeEntries().then(homes => {
      this.homes = homes;
    });
  }
}