import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { CharityService } from '../services/charity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string = '';
  isHome = false;
  isAbout = false;
  isProjects = false;
  isVolunteer = false;
  isDonate = false;
  log = false;
  menuVariable: boolean = false;
  token: boolean = false;

  constructor(private matDialog:MatDialog,
    private charityService: CharityService,
    private router: Router) { }

  ngOnInit(): void {
    this.isLogged();
  }

  openMenu() {
    this.menuVariable = !this.menuVariable;
  }

  openLogin(){
    let dialogRef = this.matDialog.open(LoginComponent,{
      disableClose: true,
      width: '500px',
      height: '420px',
    })

    dialogRef.afterClosed().subscribe(res => {
      this.isLogged();
      this.name = res;      
    })
  }

  logout() {
    this.charityService.logout();
    window.location.reload();
    this.log = false;
  }

  // getProfile() {
  //   this.router.navigate(['profile'])
  // }
  dropdownClick(){
    this.menuVariable = !this.menuVariable;
  }

  isLogged() {
    this.token = this.charityService.isLoggedIn();
    if(this.token) {
      this.log = true;
    }
    else {
      this.log = false;
    }
  }

}
