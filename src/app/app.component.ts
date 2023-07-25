import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Charity Community';
  
  name: string = '';

  constructor() {}

  ngOnInit() {}

  userNamePass(event: string) {
    this.name = event;
  }
}
