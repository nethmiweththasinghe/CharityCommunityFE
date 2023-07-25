import { Component, OnInit } from '@angular/core';
import { CharityService } from '../services/charity.service';
import { UserDetails } from '../models/userDetails';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDataForm: FormGroup;

  isShow: boolean = false;
  userName: string = 'ddd';
  userDetails: any = {};
  eyeIcon: string = "fa-eye-slash";

  constructor(private charityService: CharityService,private _formBuilder: FormBuilder){
    this.userDataForm = _formBuilder.group({
      userName: ['ddd', Validators.required],
      password: [null, Validators.required],
      contactNo: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  hideShowPassword() {
    this.isShow = !this.isShow;
    this.isShow ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
}

  getUserDetails(): void {
    this.charityService.getUserDetails(this.userName).subscribe(data =>{
      console.log(data);
      this.userDetails = data
    })
  }

  onFormSubmit() {
    // this.userDataForm.setValue(this.userName)
    if(this.userDataForm.valid) {
      let userDetails: UserDetails = this.userDataForm.value;

      this.charityService.updateUserDetails(userDetails)
      .subscribe({
        next: (res) => {
          alert('Updated Successfully');
        },
        error: (err) => {
          alert(err?.error.message);
        }
      })
    }
  }

}
