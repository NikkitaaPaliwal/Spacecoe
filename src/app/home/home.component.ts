import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Entry } from 'contentful';
import { UrlService } from '../url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homes: Entry<any>[] = [];
  tabs: Entry<any>[] = [];

  constructor(private urlService: UrlService, private router: Router) { }

  ngOnInit(): void {
    this.urlService.gethomeEntries().then(homes => {
      this.homes = homes;
    });
    this.urlService.getTabs().then(tabs => {
      this.tabs = tabs;
    });
  }


  navigateTo(section: string): void {
    // Navigate to the route based on the section argument
    this.router.navigate([section]);
  }

  scrollToTeam(): void {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}