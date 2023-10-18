import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharityService } from '../services/charity.service';
import { Volunteer } from '../models/volunteers';
import { MatDialog } from '@angular/material/dialog';
import { VolunteerPopupComponent } from './volunteer-popup/volunteer-popup.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
})
export class VolunteerComponent implements OnInit {
  volunteerDataForm: FormGroup;

  projects = [
    'Education',
    'Physical health',
    'Mental health',
    'Career',
    'Food',
    'Elders right ',
    'Entreprenership',
    'Womens right',
  ];

  constructor(
    private matDialog: MatDialog,
    private charityService: CharityService,
    private _formBuilder: FormBuilder
  ) {
    this.volunteerDataForm = _formBuilder.group({
      project: [null, Validators.required],
      description: [null, Validators.required],
      other: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  Save() {
    let logIn: boolean = this.charityService.isLoggedIn();

    if (logIn) {
      if (this.volunteerDataForm.valid) {
        const result = localStorage.getItem('data');
        let volunteersDetails: Volunteer = this.volunteerDataForm.value;
        if (result !== undefined) {
          volunteersDetails.userId = result?.toString();
          volunteersDetails.createdDate = new Date();
        }

        this.charityService.addVolunteerDetails(volunteersDetails).subscribe({
          next: (res) => {
            this.openPopup();
          },
          error: (err) => {
            this.openPopup();
          },
        });
      }
    } else {
      let dialogRef = this.matDialog.open(LoginComponent, {
        disableClose: true,
        width: '500px',
        height: '420px',
      });
    }
  }

  openPopup() {
    let dialogRef = this.matDialog.open(VolunteerPopupComponent, {
      disableClose: true,
      width: '380px',
      height: '150px',
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.volunteerDataForm.reset();
    });
  }
}
