import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainBarComponent } from './main-bar/main-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainBarComponent, SideBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
