import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { TeamComponent } from './team/team.component';
import { AutoComponent } from './auto/auto.component';
import { ServiceComponent } from './service/service.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { StartupComponent } from './startup/startup.component';
import { PolicyComponent } from './policy/policy.component';
import { PolicyAndRegulationComponent } from './policy-and-regulation/policy-and-regulation.component';
import { InvestmentAndFundingComponent } from './investment-and-funding/investment-and-funding.component';
import { IndustryAndPartnershipsComponent } from './industry-and-partnerships/industry-and-partnerships.component';
import { OtherComponent } from './other/other.component';
import { CompetitorComponent } from './competitor/competitor.component';
import { OtherEventComponent } from './other-event/other-event.component';
import { StaSciTechAdvancementComponent } from './sta-sci-tech-advancement/sta-sci-tech-advancement.component';
import { PolicyRegulationChangeComponent } from './policy-regulation-change/policy-regulation-change.component';


export const routes: Routes = [
    { path: '', redirectTo: 'mainpage', pathMatch: 'full' },
    {path:'mainpage',component:MainpageComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'home', component: HomeComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'video', component: VideoComponent},
    {path: 'article', component: ArticleComponent},
    {path: 'footer', component: FooterComponent},
    {path: 'casestudies', component: CasestudiesComponent},
    {path:'team', component: TeamComponent},
    {path:'auto', component: AutoComponent},
    {path: 'policy', component: PolicyComponent },
    {path: 'policy/:headline', component: PolicyComponent },
    {path:'policyandregulation', component: PolicyAndRegulationComponent},
    { path: 'industryandpartnerships', component: IndustryAndPartnershipsComponent },
    { path: 'industryandpartnerships/:headline', component: IndustryAndPartnershipsComponent },
    { path: 'investmentandfunding', component: InvestmentAndFundingComponent },
    { path: 'investmentandfunding/:headline', component: InvestmentAndFundingComponent },
    { path: 'other', component: OtherComponent },
    { path: 'other/:headline', component: OtherComponent },
    { path: 'startup', component: StartupComponent },
    {path: 'startup/:headline', component: StartupComponent },
    {path:'competitor', component: CompetitorComponent},
    {path:'competitor/:headline', component: CompetitorComponent},
    {path:'otherevent', component: OtherEventComponent},
    { path:'otherevent/:headline', component: OtherEventComponent },
    {path:'scitechadvancement', component: StaSciTechAdvancementComponent},
    { path: 'scitechadvancement/:headline', component: StaSciTechAdvancementComponent },
    {path:'policyandregulationchange', component: PolicyRegulationChangeComponent},
    { path: 'policyandregulationchange/:headline', component: PolicyRegulationChangeComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' }
    
]; 
