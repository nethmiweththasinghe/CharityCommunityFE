import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  projects = [
    'Education', 'Physical health', 'Mental health', 'Career', 'Food', 'Elders right ', 'Entreprenership', 'Womens right'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
