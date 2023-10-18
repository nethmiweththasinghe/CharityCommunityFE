import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../models/userDetails';
import { Observable } from 'rxjs';
import { Volunteer } from '../models/volunteers';
import { ProjectDetails } from '../models/projectDetails';
import { Donors } from '../models/donors';

@Injectable({
  providedIn: 'root',
})
export class CharityService {
  constructor(private http: HttpClient) {}

  // Sign Up
  addUserDetails(userDetails: UserDetails): Observable<any> {
    return this.http.post(
      'http://localhost:5094/api/User/AddUserDetails',
      userDetails
    );
  }

  // Login
  authenticate(userDetails: UserDetails): Observable<any> {
    return this.http.post(
      'http://localhost:5094/api/User/authenticate',
      userDetails
    );
  }

  storeData(userName: string) {
    localStorage.setItem('data', userName);
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    localStorage.getItem('token');
  }

  getData() {
    localStorage.getItem('data');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.clear();
  }

  // Get user deatils
  getUserDetails(userName: string): Observable<UserDetails> {
    return this.http.get(
      `http://localhost:5094/api/User/GetUserDetails/${userName}`
    );
  }

  // Update user
  updateUserDetails(userDetails: UserDetails): Observable<any> {
    return this.http.post(
      'http://localhost:5094/api/User/UpdateUserDetails',
      userDetails
    );
  }

  // Add Volunteers
  addVolunteerDetails(volunteer: Volunteer): Observable<any> {
    return this.http.post(
      'http://localhost:8080/api/user/addVolunteerDetails',
      volunteer
    );
  }

  // Get volunteers
  getVolunteerDetails(project: string): Observable<Volunteer> {
    return this.http.get(
      `http://localhost:8080/api/user/getVolunteersByProjectId/${project}`
    );
  }

  // Add Donations
  addDonorDetails(Donors: Donors): Observable<any> {
    return this.http.post(
      'http://localhost:8080/api/user/addDonorDetails',
      Donors
    );
  }

  // Get volunteers
  getDonors(): Observable<Donors> {
    return this.http.get(`http://localhost:8080/api/user/getDonors`);
  }

  // Get project deatils
  getProjectDetails(project: string): Observable<ProjectDetails> {
    return this.http.get(
      `http://localhost:5094/api/User/GetProjectDetails/${project}`
    );
  }
}
