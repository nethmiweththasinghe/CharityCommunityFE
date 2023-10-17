import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { ProjectsComponent } from './projects/projects.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ProfileComponent } from './profile/profile.component';
import { MatSelectModule} from '@angular/material/select';
import { ProjectsPopupComponent } from './projects/projects.popup/projects.popup.component';
import { VolunteerPopupComponent } from './volunteer/volunteer-popup/volunteer-popup.component';
import { DonationPopupComponent } from './donate/donation-popup/donation-popup.component';
import { ViewDonorsComponent } from './donate/view-donors/view-donors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    DonateComponent,
    ProjectsComponent,
    VolunteerComponent,
    ProfileComponent,
    ProjectsPopupComponent,
    VolunteerPopupComponent,
    DonationPopupComponent,
    ViewDonorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
