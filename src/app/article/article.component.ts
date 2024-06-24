import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { UrlService } from '../url.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
  articles: Entry<any>[] = [];

  constructor(private urlService: UrlService) { }

  ngOnInit(): void {
    this.urlService.getarticlesEntries().then(articles => { 
      this.articles = articles;
    });
  }
}
