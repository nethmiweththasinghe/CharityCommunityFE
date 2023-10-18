import { Component } from '@angular/core';
import { Donors } from 'src/app/models/donors';
import { CharityService } from 'src/app/services/charity.service';

@Component({
  selector: 'app-view-donors',
  templateUrl: './view-donors.component.html',
  styleUrls: ['./view-donors.component.css']
})
export class ViewDonorsComponent {

  public donateDetails: any; 
  public leftDonors: any; 
  public rightDonors: any; 

  constructor(private charityService: CharityService){}

  ngOnInit(): void {
    this.getDonors();
  }

  getDonors() {
    this.charityService.getDonors().subscribe( data => {

      this.donateDetails = data;
      this.leftDonors = this.donateDetails.filter((element: any, index: number) => index % 2 === 0);
      this.rightDonors = this.donateDetails.filter((element: any, index: number) => index % 2 === 1);
    })
  }
}
