import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { StorageService } from '../storage.service';
import { MatDialog } from '@angular/material/dialog';
import { DataDialogComponent } from '../data-dialog/data-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpHeaders } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CardComponent } from './card/card.component';
import Dog from '../model/models';

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [NgSelectModule, CommonModule, MatDatepickerModule, MatFormFieldModule, MatPaginatorModule, MatProgressSpinnerModule, CardComponent],
  providers: [],
  templateUrl: './dog-list.component.html',
  styleUrl: './dog-list.component.scss'
})
export class DogListComponent implements OnInit {

  dogsList: Dog[] = [];
  headers = new HttpHeaders();
  imageRequestCount = 0;
  pageIndex = 0;
  pageSize = 12;
  quantDogs = 0;
  isLoading = true;

  constructor(private storage: StorageService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.doDogsPaginatedRequest();
  }

  private doDogsPaginatedRequest(): void {
    this.isLoading = true;
    this.imageRequestCount = 0;
    this.storage.getDogs(this.pageIndex, this.pageSize).subscribe((response: any) => {    
      this.dogsList = response.body;
      const paginationCountHeader = response.headers?.headers?.get("pagination-count")
      if (paginationCountHeader && paginationCountHeader.length > 0) {
        this.quantDogs = paginationCountHeader[0];
      }
      this.doDogImageRequests();

    }, () => {

    });

  }

  private doDogImageRequests() {
    this.dogsList.forEach((dog: any) => {
      this.storage.getImage(dog.reference_image_id).subscribe((image: any) => {
        dog['imageURL'] = image.url;
        this.imageRequestCount++;
        this.validateLoading();
      });
    });
  }

  private validateLoading() {
    if (this.imageRequestCount === this.dogsList.length) {
      this.isLoading = false;
    }
  }

  openDialog(data: any) {
    this.dialog.open(DataDialogComponent, {
      data: data,
      width: '30%'
    });
  }

  pageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.doDogsPaginatedRequest();

  }

}
