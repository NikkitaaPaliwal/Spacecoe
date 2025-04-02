import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Entry } from 'contentful';
import { UrlService } from '../url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guildStart',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './guildStart.component.html',
  styleUrls: ['./guildStart.component.css']
})
export class GuildStart implements OnInit {
  homes: Entry<any>[] = [];

  constructor(private urlService: UrlService, private router: Router) { }

  ngOnInit(): void {
    this.urlService.gethomeEntries().then(homes => {
      this.homes = homes;
    });
  }
}