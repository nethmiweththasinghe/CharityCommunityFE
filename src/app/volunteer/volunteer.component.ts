import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharityService } from '../services/charity.service';
import { Volunteers } from '../models/volunteers';

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
    private charityService: CharityService,
    private _formBuilder: FormBuilder) {
    this.volunteerDataForm = _formBuilder.group({
      project: [null, Validators.required],
      description: [null, Validators.required],
      other: [null, Validators.required],
    });
  }

  ngOnInit(): void {}


  Save() {
    if(this.volunteerDataForm.valid) {
      let volunteersDetails: Volunteers = this.volunteerDataForm.value;

      this.charityService.addVolunteerDetails(volunteersDetails)
      .subscribe({
        next: (res) => {
          alert("Thanks for volunteering!")
        },
        error: (err) => {
          alert(err?.error.message);
        }
      })
    }
  }
}
