import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { VideoComponent } from './video/video.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { TeamComponent } from './team/team.component';
import { AutoComponent } from './auto/auto.component';
import { OtherComponent } from './other/other.component';
import { PolicyAndRegulationComponent } from './policy-and-regulation/policy-and-regulation.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HomeComponent,ServiceComponent,VideoComponent,ArticleComponent,CasestudiesComponent,TeamComponent, FooterComponent,AutoComponent,OtherComponent,PolicyAndRegulationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
