import { Component } from '@angular/core';
import { GuildStart } from '../guildStart/guildStart.component';
import { CoreCommitee } from '../coreCommitee/coreCommitee.component';
import { DsaGuild } from '../dsaGuild/dsaGuild.component';
import { JoinHere } from '../joinhere/joinhere.component';
import { Newsletter } from '../newsletter/newsletter.component';
import { SpaceEvents } from '../spaceEvents/spaceEvents.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-guildPage',
  templateUrl: './guildPage.component.html',
  styleUrls: ['./guildPage.component.css'],
  standalone: true,
  imports: [HeaderComponent, GuildStart, CoreCommitee, DsaGuild, Newsletter, SpaceEvents, JoinHere, FooterComponent],
})
export class GuildPageComponent {
  scrollTo(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
}
