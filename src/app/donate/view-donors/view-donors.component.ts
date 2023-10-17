import { Component } from '@angular/core';
import { Donors } from 'src/app/models/donors';
import { CharityService } from 'src/app/services/charity.service';

@Component({
  selector: 'app-view-donors',
  templateUrl: './view-donors.component.html',
  styleUrls: ['./view-donors.component.css']
})
export class ViewDonorsComponent {

  public donateDetails: Donors[] = []; 

  constructor(private charityService: CharityService){}

  ngOnInit(): void {
    this.getDonors();
  }

  getDonors() {
    this.charityService.getDonors().subscribe( data => {

      // this.donateDetails.push(data);
      
      // this.donateDetails.forEach(element => {
      //   let donors: Donors = {
      //     id: data.id,
      //     project: data.project,
      //     amount: data.amount,
      //     createdDate: data.createdDate
      //   }
        
        console.log(data);
      // });

      
    })
  }
}
