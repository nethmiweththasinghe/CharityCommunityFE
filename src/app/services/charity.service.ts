import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { UserDetails } from '../models/userDetails';
import { Observable } from 'rxjs';
import { Volunteers } from '../models/volunteers';
import { ProjectDetails } from '../models/projectDetails';

@Injectable({
  providedIn: 'root'
})
export class CharityService {

  constructor(private http:HttpClient) { }

  // Sign Up
  addUserDetails(userDetails: UserDetails): Observable<any> {
    return this.http.post("http://localhost:5094/api/User/AddUserDetails",userDetails);
  }

  // Login
  authenticate(userDetails: UserDetails): Observable<any> {
    return this.http.post("http://localhost:5094/api/User/authenticate",userDetails);
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token',tokenValue)
  }

  getToken() {
    localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.clear()
  }



  


  // Get user deatils
  getUserDetails(userName: string): Observable<UserDetails> {
    return this.http.get(`http://localhost:5094/api/User/GetUserDetails/${userName}`);
  }

  // Update user
  updateUserDetails(userDetails: UserDetails): Observable<any> {
    return this.http.post("http://localhost:5094/api/User/UpdateUserDetails",userDetails);
  }

  // Add volunteers
  addVolunteerDetails(volunteersDetails: Volunteers): Observable<any> {
    console.log(volunteersDetails);
    return this.http.post("http://localhost:5094/api/User/AddVolunteerDetails",volunteersDetails);
  }

  // Get project deatils
  getProjectDetails(projectId: number): Observable<ProjectDetails> {
    return this.http.get(`http://localhost:5094/api/User/GetProjectDetails/${projectId}`);
  }

}
