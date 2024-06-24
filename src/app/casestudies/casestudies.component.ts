import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Entry } from 'contentful';

@Component({
  selector: 'app-casestudies',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './casestudies.component.html',
  styleUrl: './casestudies.component.css'
})
export class CasestudiesComponent implements OnInit{
  // industryreports!: any[];
  // deloitteassets!: any[];
  // synergizeinitiatives!: any[];

  // constructor(private contentfulService: UrlService) { }

  // ngOnInit(): void {
  //   this.fetchData();
  // }

  // async fetchData() {
  //   this.industryreports = await this.contentfulService.getContent('industryreports');
  //   this.deloitteassets = await this.contentfulService.getContent('deloitteassets');
  //   this.synergizeinitiatives = await this.contentfulService.getContent('synergizeInitiatives');
  // }

  industryreports: Entry<any>[] = [];
  deloitteassets: Entry<any>[] = [];

  synergizeinitiatives: Entry<any>[] = [];

  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
    this.urlService.getindustryreportEntries().then(industryreports => { 
      this.industryreports = industryreports; 
    });

    this.urlService.getdeloitteassetEntries().then(deloitteassets => { 
      this.deloitteassets = deloitteassets; 
    });

    this.urlService.getsynergizeInitiativeEntries().then(synergizeinitiatives => { 
      this.synergizeinitiatives = synergizeinitiatives; 
    });
  }
}
