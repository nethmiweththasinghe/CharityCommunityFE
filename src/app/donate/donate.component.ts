import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DonateDetails } from '../models/donateDetails';
import { CharityService } from '../services/charity.service';
import { DonationPopupComponent } from './donation-popup/donation-popup.component';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  donateDataForm: FormGroup;

  projects = [
    'Education', 'Physical health', 'Mental health', 'Career', 'Food', 'Elders right ', 'Entreprenership', 'Womens right'
  ];

  constructor(private matDialog:MatDialog,
    private charityService: CharityService,
    private _formBuilder: FormBuilder) {
    this.donateDataForm = _formBuilder.group({
      project: [null, Validators.required],
      amount: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  Save() {
    if(this.donateDataForm.valid) {
      let donoationDetails: DonateDetails = this.donateDataForm.value;

      this.charityService.addDonationDetails(donoationDetails)
      .subscribe({
        next: (res) => {
          this.openPopup();
        },
        error: (err) => {
          this.openPopup();
          // alert(err?.error.message);
        }
      })
    }
  }

  openPopup() {
    let dialogRef = this.matDialog.open(DonationPopupComponent,{
      disableClose: true,
      width: '500px',
      height: '190px',
    })
  
    dialogRef.afterClosed().subscribe(res => {
      // this.volunteerDataForm.reset();
    })
  }

}
