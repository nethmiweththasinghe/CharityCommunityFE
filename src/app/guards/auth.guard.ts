import { Injectable } from '@angular/core';
import { CharityService } from '../services/charity.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private charityService : CharityService){

  }
  canActivate():boolean{
    if(this.charityService.isLoggedIn()){
      return true;
    }else{
      return false;
    }
  }

}
