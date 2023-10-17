import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CharityService } from 'src/app/services/charity.service';
import { ProjectDetails } from 'src/app/models/projectDetails';
import { Volunteer } from 'src/app/models/volunteers';

@Component({
  selector: 'app-projects.popup',
  templateUrl: './projects.popup.component.html',
  styleUrls: ['./projects.popup.component.css'],
})
export class ProjectsPopupComponent implements OnInit {
  
  projectId: string = "";
  projectDetails: ProjectDetails = {};
  volunteers: Volunteer[] = [];

  constructor(
    private charityService: CharityService,
    private dialogRef: MatDialogRef<ProjectsPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title : string }
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.getVolunteerDetails();
  }

  close() {
    this.dialogRef.close();
  }

  getProjectDetails() {
    this.projectId = this.data.title;

    this.charityService.getProjectDetails(this.projectId).subscribe(data =>{
      this.projectDetails = data;
      
    })
  }

  getVolunteerDetails(): void {
    this.projectId = this.data.title;
    this.charityService.getVolunteerDetails(this.projectId).subscribe(data => {
      // this.volunteers = data;
      
    })
  }
}
