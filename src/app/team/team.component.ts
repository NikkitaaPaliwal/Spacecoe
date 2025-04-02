import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UrlService } from '../url.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: Entry<any>[] = [];

  // Define the hierarchy of designations
  designationHierarchy: { [key: string]: number } = {
    'Partner': 1,
    'Director': 2,
    'Associate Director': 3,
    'Senior Manager': 4,
    'Manager': 5,  
  };

  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
    this.urlService.getTeamsEntries().then(teams => {
      // Sort the teams array based on the predefined designation hierarchy
      this.teams = teams.sort((a, b) => {
        const designationA = a.fields['designation'] || '';
        const designationB = b.fields['designation'] || '';

        // Get the rank of the designations from the predefined hierarchy
        const rankA = this.designationHierarchy[designationA] || Number.MAX_SAFE_INTEGER;
        const rankB = this.designationHierarchy[designationB] || Number.MAX_SAFE_INTEGER;

        // Compare based on the rank
        return rankA - rankB;
      });
    });
  }
  
}
