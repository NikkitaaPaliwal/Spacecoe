import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../url.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sta-sci-tech-advancement',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './sta-sci-tech-advancement.component.html',
  styleUrl: './sta-sci-tech-advancement.component.css'
})
export class StaSciTechAdvancementComponent implements OnInit, AfterViewInit{
  scitechadvancements: any[] = [];

  constructor(private urlService: UrlService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const headline = params['headline'];
      console.log('Headline:', headline); // Log the received headline
      console.log('Current route params:', this.route.snapshot.params);
    });

    this.urlService.getScitechadvancementEntries().then(scitechadvancements => {
      this.scitechadvancements = scitechadvancements;
      console.log('Fetched scitech advancements:', this.scitechadvancements); // Log fetched scitech advancement entries
    });
  }

  ngAfterViewInit(): void {
    this.route.params.subscribe(params => {
      console.log('Received parameters:', params); // Log the received parameters
      const headline = params['headline'];
      console.log('Received headline:', headline); // Log the received headline
      if (headline) {
        setTimeout(() => {
          const element = document.getElementById(this.generateId(headline));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
          }
        }, 1000); // Adjust the timeout as needed
      }
    });
  }

  generateId(headline: string): string {
    return headline.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
  }
}
