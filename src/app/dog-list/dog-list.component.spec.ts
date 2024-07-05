import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogListComponent } from './dog-list.component';
import { provideHttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('DogListComponent', () => {
  let component: DogListComponent;
  let fixture: ComponentFixture<DogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogListComponent, NgSelectModule, CommonModule, MatDatepickerModule, MatFormFieldModule, MatPaginatorModule, MatProgressSpinnerModule],
      providers: [provideHttpClient(), provideAnimations()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
