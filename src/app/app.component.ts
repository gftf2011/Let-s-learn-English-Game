import { Component } from '@angular/core';

import { EndGame } from './models/endGame.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message:string

  public gameHasEnded:boolean

  public endgameEvent(endGame: EndGame): void {
    this.message = endGame.getMessage()
    this.gameHasEnded = endGame.getGameHasEnded()
  }

}
