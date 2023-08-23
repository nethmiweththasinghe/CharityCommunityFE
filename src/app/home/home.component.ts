import { Component, OnInit } from '@angular/core';
import { CharityService } from '../services/charity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // public emails: any;

  constructor(private charityService:CharityService) { }

  ngOnInit(): void {
  }

}
