import { Component, EventEmitter, Input, Output } from '@angular/core';
import Dog from '../../model/models';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input()
  dog = new Dog();

  @Output()
  onCardClick = new EventEmitter<boolean>();

  onClick() {
    this.onCardClick.emit(true);
  }

}
