import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDialogComponent } from './data-dialog.component';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';

describe('DataDialogComponent', () => {
  let component: DataDialogComponent;
  let fixture: ComponentFixture<DataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataDialogComponent, MatDialogTitle, MatDialogContent, MatDialogModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {height:{}, weight: {}} },]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
