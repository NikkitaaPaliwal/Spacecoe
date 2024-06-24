import { Injectable } from '@angular/core';
import { Entry, createClient } from 'contentful';


@Injectable({
  providedIn: 'root'
})
export class UrlService {


  private client = createClient({
    space: 'j9wxqfqczhwn',
    accessToken: 'AKr8X7NLUjO9pInWBxCatNQioHUvqzNI_PzgLi4i8cc'
  });

  constructor() { }

  getInvestmentEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'investment'
    }).then(response => {
      // console.log('Investment entries:', response.items); 
      return response.items;
    });
  }
  
  getIndustryEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'industry'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getOtherEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'other'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getStartupEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'startup'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getCompetitorEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'competitor'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getOtherEventEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'otherevent'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getScitechadvancementEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'scitechadvancement'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getPolicyandregulationchangeEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'policyandregulationchange'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getFuturesatellitesEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'futuresatellites'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getTeamsEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'team'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }


  gethomeEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'home'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }


  getserviceEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'services'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }


  getarticlesEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'article'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  // async getContent(contentType: string): Promise<Entry<any>[]> {
  //   const entries = await this.client.getEntries({
  //     content_type: contentType
  //   });
  //   return entries.items;
  // }


  getindustryreportEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'industryreports'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getdeloitteassetEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'deloitteassets'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }

  getsynergizeInitiativeEntries(): Promise<any[]> {
    return this.client.getEntries({
      content_type: 'synergizeInitiatives'
    }).then(response => {
      // console.log('Industry entries:', response.items); 
      return response.items;
    });
  }
  
  }
