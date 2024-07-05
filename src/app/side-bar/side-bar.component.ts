import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@Angular/material/icon';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  animations: [trigger('openClose', [
    state('open', style({
      width: '150px',
      opacity: 1,
    })),
    state('closed', style({
      width: '70px',
      opacity: 1,
    })),
    transition('open <=> closed', [
      animate('0.3s')
    ]),
  ]),]
})
export class SideBarComponent {

  isOpen = false;

  @Output() sideBarStatus = new EventEmitter<boolean>();

  isContentDisplayed = false;

  constructor(private router: Router) { }

  openSideBar() {
    this.isOpen = !this.isOpen;
    this.sideBarStatus.emit(this.isOpen);
  }

  onDoneAnimation(event: any) {
    if (event.toState === 'open' && event.phaseName === 'done') {
      this.isContentDisplayed = true;
    }

  }

  onStartAnimation(event: any) {
    if (event.toState === 'closed') {
      this.isContentDisplayed = false;
    }
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }

  navigateToDogList() {
    this.router.navigate(['dog-list']);
  }

}
