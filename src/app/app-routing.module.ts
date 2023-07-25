import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { DonateComponent } from './donate/donate.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '', redirectTo: '/header', pathMatch: 'full' },
  // { path: '', redirectTo: '/footer', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'header', component: HeaderComponent },
  // { path: 'footer', component: FooterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'chatBot', component: ChatBotComponent },
  { path: 'profile', component: ProfileComponent, data: {name: 'some value'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
