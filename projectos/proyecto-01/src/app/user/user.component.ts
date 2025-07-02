import { Component } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-user',
  imports: [GameComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'NicoGGomez'
  estaLogueado = false
  favGame = ''

  recepcionarFav(gameName: string){
    this.favGame = gameName;
  }

  greet() {
    alert('hola')
  }
}
