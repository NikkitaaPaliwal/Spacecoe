import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UrlService } from '../url.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit{

  teams: Entry<any>[] = [];

  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
    this.urlService.getTeamsEntries().then(teams => { 
      this.teams = teams;
    });
  }
}
