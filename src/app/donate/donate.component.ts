import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Donors } from '../models/donors';
import { CharityService } from '../services/charity.service';
import { DonationPopupComponent } from './donation-popup/donation-popup.component';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  donateDataForm: FormGroup;
  donateBtn: boolean = true;

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
      let donoationDetails: Donors = this.donateDataForm.value;

      this.charityService.addDonorDetails(donoationDetails).subscribe( res => {
        if(res == true){
          this.openPopup();
        }
      //   next: (res) => {
      //     this.openPopup();
      //   },
      //   error: (err) => {
      //     // alert(err?.error.message);
      //   }
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
      this.donateDataForm.reset();
    })
  }

  autoFill1(v1: number){
    this.donateDataForm.controls['amount'].setValue(v1);
}

}
