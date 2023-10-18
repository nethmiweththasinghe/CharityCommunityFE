import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { CharityService } from '../services/charity.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetails } from '../models/userDetails';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDataForm: FormGroup;
  userLoginForm: FormGroup;
  onlyLetters: RegExp = /^[A-Za-z\s]*$/i;

  isLogin: boolean = true;
  isShow: boolean = false;
  isShowC: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  eyeIconC: string = "fa-eye-slash";
  username: string = '';

  constructor(private charityService: CharityService,
              private _formBuilder: FormBuilder, 
              private dialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string,) {
              dialogRef.disableClose = true;

    this.userDataForm = this._formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      userName: [null, Validators.required],
      email: [null, Validators.email],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required],      
      nic: [null, Validators.required],      
      contactNo: [null, Validators.minLength(10)]
    })
    this.userLoginForm = _formBuilder.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  hideShowPassword() {
    this.isShow = !this.isShow;
    this.isShow ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
}
  hideShowCPassword() {
    this.isShowC = !this.isShowC;
    this.isShowC ? this.eyeIconC = "fa-eye" : this.eyeIconC = "fa-eye-slash";
}

  onFormSubmit() {
    if(this.userDataForm.valid) {
      let userDetails: UserDetails = this.userDataForm.value;

      this.charityService.addUserDetails(userDetails)
      .subscribe({
        next: (res) => {
          this.charityService.storeToken(res.token);
          this.charityService.storeData(res.data.userName);
          this.dialogRef.close({data: res.data.userName});
        },
        error: (err) => {
          alert(err?.error.message);
        }
      })
    }
  }
  
  onLoginFormSubmit() {
    if(this.userLoginForm.valid) {
      this.charityService.authenticate(this.userLoginForm.value)
      .subscribe({
        next: (res) => {
          // alert('Welcome back '+ res.message);
          // this.toast.success({detail:"SUCCESS", summary: res.message, duration: 5000});
          this.charityService.storeToken(res.token);
          this.charityService.storeData(res.data.userName);
          this.dialogRef.close({data: res.data.userName});
        },
        error: (err) => {
          // this.toast.error({detail:"ERROR", summary: "Something went wrong!", duration: 5000});
          alert(err.error.message);
        }
      })
    }
  }

  loginHere() {
    this.isLogin = true;
    this.isShow = false;
    this.isShow ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
  }

  signUpHere() {
    this.isLogin = false;
    this.isShow = false;
    this.isShow ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isShowC = false;
    this.isShowC ? this.eyeIconC = "fa-eye" : this.eyeIconC = "fa-eye-slash";
  }

  getUserData(id:string){
    console.warn(id);
    this.charityService.getUserDetails(id).subscribe(()=>{
      console.warn(id);
    })
  }


}
