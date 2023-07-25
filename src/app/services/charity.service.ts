import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { UserDetails } from '../models/userDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharityService {

  constructor(private http:HttpClient) { }

  // Get user deatils
  getUserDetails(userName: string): Observable<UserDetails> {
    return this.http.get(`http://localhost:5094/api/User/GetUserDetails/${userName}`);
  }

  // Sign Up
  addUserDetails(userDetails: UserDetails): Observable<any> {
    return this.http.post("http://localhost:5094/api/User/AddUserDetails",userDetails);
  }

  // Login
  authenticate(userDetails: UserDetails): Observable<any> {
    return this.http.post("http://localhost:5094/api/User/authenticate",userDetails);
  }

  updateUserDetails(userDetails: UserDetails): Observable<any> {
    return this.http.post("http://localhost:5094/api/User/UpdateUserDetails",userDetails);
  }

}
