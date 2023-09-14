import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { DonateComponent } from './donate/donate.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsPopupComponent } from './projects/projects.popup/projects.popup.component';
import { AuthGuard } from './guards/auth.guard';
import { ViewDonorsComponent } from './donate/view-donors/view-donors.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'chatBot', component: ChatBotComponent },
  // { path: 'projectsPopup', component: ProjectsPopupComponent, canActivate:[AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  { path: 'donors', component: ViewDonorsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
