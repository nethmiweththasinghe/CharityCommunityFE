import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-donation-popup',
  templateUrl: './donation-popup.component.html',
  styleUrls: ['./donation-popup.component.css']
})
export class DonationPopupComponent {

  constructor(private dialogRef: MatDialogRef<DonationPopupComponent>) {}

  close() {
    this.dialogRef.close();
  }

}
