import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

export interface DialogData {
  weight: any,
  life_span: string,
  origin: string,
  height: any,
  name: string,
}

@Component({
  selector: 'app-data-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
  templateUrl: './data-dialog.component.html',
  styleUrl: './data-dialog.component.scss'
})
export class DataDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  getOrigin() {
    return this.data.origin && this.data.origin.length > 0 ? this.data.origin : 'Unknown'
  }
}

