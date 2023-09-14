import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-volunteer-popup',
  templateUrl: './volunteer-popup.component.html',
  styleUrls: ['./volunteer-popup.component.css']
})
export class VolunteerPopupComponent {

  constructor(private dialogRef: MatDialogRef<VolunteerPopupComponent>,) {}

  close() {
    this.dialogRef.close();
  }

}
