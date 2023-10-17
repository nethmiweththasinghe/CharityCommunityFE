import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsPopupComponent } from './projects.popup/projects.popup.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  search : String ="";

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }

  openPopup(project : string) {
    let dialogRef = this.matDialog.open(ProjectsPopupComponent,{
      disableClose: true,
      width: '700px',
      height: '580px',
      data: {
        title: project
      }
    })
  
    dialogRef.afterClosed().subscribe(res => {
    })
  }

}
