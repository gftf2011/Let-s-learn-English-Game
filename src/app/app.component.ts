import { Component } from '@angular/core';

import { EndGame } from './models/endGame.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private message:string
  private emoji:string

  private gameHasEnded:boolean

  public endgameEvent(endGame: EndGame): void {
    this.message = endGame.getMessage()
    this.emoji = endGame.getEmoji()
    this.gameHasEnded = endGame.getGameHasEnded()
  }

  public get getGameHasEnded():boolean {
    return this.gameHasEnded
  }

  public get getMessage():string {
    return this.message
  }

  public get getEmoji():string {
    return this.emoji
  }

}
