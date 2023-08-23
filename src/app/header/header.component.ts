import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

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

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }

  openMenu() {
    this.menuVariable = !this.menuVariable;
  }

  openLogin(){
    let dialogRef = this.matDialog.open(LoginComponent,{
      width: '500px',
      height: '420px',
    })

    dialogRef.afterClosed().subscribe(res => {
      this.name = res.data;
      this.log = true;
    })
  }

  logout() {
    this.log = false;
  }

  userCheck() {

  }
  dropdownClick(){
    this.menuVariable = !this.menuVariable;
  }

}
