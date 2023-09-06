import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CharityService } from 'src/app/services/charity.service';
import { ProjectDetails } from 'src/app/models/projectDetails';

@Component({
  selector: 'app-projects.popup',
  templateUrl: './projects.popup.component.html',
  styleUrls: ['./projects.popup.component.css'],
})
export class ProjectsPopupComponent implements OnInit {
  
  projectId: number | undefined;
  projectDetails: ProjectDetails = {};

  constructor(
    private charityService: CharityService,
    private dialogRef: MatDialogRef<ProjectsPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title : number }
  ) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.getProjectDetails();
  }

  close() {
    this.dialogRef.close();
  }

  getProjectDetails() {
    this.projectId = this.data.title;

    this.charityService.getProjectDetails(this.projectId).subscribe(data =>{
      this.projectDetails = data
      console.log(this.projectDetails);
      
    })
  }
}
