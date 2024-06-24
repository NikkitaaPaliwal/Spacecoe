import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { ServiceComponent } from '../service/service.component';
import { VideoComponent } from '../video/video.component';
import { ArticleComponent } from '../article/article.component';
import { CasestudiesComponent } from '../casestudies/casestudies.component';
import { TeamComponent } from '../team/team.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [HeaderComponent,HomeComponent,ServiceComponent,VideoComponent,ArticleComponent,CasestudiesComponent,TeamComponent, FooterComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
