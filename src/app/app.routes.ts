import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DogListComponent } from './dog-list/dog-list.component';

export const routes: Routes = [{ path: 'dog-list', component: DogListComponent }, { path: '', redirectTo: '/home', pathMatch: 'full' }, { path: 'home', component: HomeComponent }];
