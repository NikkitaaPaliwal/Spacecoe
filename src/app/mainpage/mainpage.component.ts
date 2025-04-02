import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { ServiceComponent } from '../service/service.component';
import { VideoComponent } from '../video/video.component';
import { ArticleComponent } from '../article/article.component';
import { CasestudiesComponent } from '../casestudies/casestudies.component';
import { TeamComponent } from '../team/team.component';
import { FooterComponent } from '../footer/footer.component';
import { ReportsComponent } from '../reports/reports.component';
import { PodcastsComponents } from '../podacasts/podcasts.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [HeaderComponent, ReportsComponent, HomeComponent,ServiceComponent,VideoComponent,ArticleComponent,CasestudiesComponent,TeamComponent, FooterComponent, PodcastsComponents],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
