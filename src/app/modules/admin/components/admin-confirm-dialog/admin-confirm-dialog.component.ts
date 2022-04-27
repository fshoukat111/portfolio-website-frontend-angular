import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-confirm-dialog',
  templateUrl: './admin-confirm-dialog.component.html',
  styleUrls: ['./admin-confirm-dialog.component.sass']
})
export class AdminConfirmDialogComponent implements OnInit {
  public message: string = "Are you sure?"
  public confirmButtonText = "Yes"
  public cancelButtonText = "Cancel"

  constructor(@Inject(MAT_DIALOG_DATA) private data,
  private dialogRef: MatDialogRef<any>) { 
    if(data){
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
        }
  }

  ngOnInit(): void {
  }

  confirm(): void {
    this.dialogRef.close(true);
  }

}
