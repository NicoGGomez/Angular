import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  @Input() username= "";
  @Output() eventoAgregaraFav = new EventEmitter<string>();

  juegosfav(gameName: string) {
    this.eventoAgregaraFav.emit(gameName)
  }

  games = [
    {
      id: 1,
      name: 'uncharted'
    },
    {
      id: 2,
      name: 'the last of us'
    },
    {
      id: 3,
      name: 'minecraft'
    }
  ]
}
