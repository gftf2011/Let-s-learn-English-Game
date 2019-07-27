import { Component } from '@angular/core';

import { EndGame } from './models/endGame.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private correctAnswers:number
  private totalQuestions:number

  private message:string
  private emoji:string

  private gameHasEnded:boolean
  private checkAnswer:boolean

  public displayModal:string = 'none'

  public modalMessage:string = ''
  
  public modalDisplayNone(modalDisplayNone:string) {
    this.displayModal = modalDisplayNone
  }

  public alertCheckOfAnswer(checkAnswer: boolean) {
    this.checkAnswer = checkAnswer
  }

  public endgameEvent(endGame: EndGame): void {
    this.correctAnswers = endGame.getCorrectAnswer()
    this.totalQuestions = endGame.getTotalQuestions()
    this.message = endGame.getMessage()
    this.emoji = endGame.getEmoji()
    this.gameHasEnded = endGame.getGameHasEnded()
  }

  public modalAttributes(modalAttributes: Array<string>): void {
    this.displayModal = modalAttributes[0]
    this.modalMessage = modalAttributes[1]
  }

  public get getCheckAnswer():boolean {
    return this.checkAnswer
  }

  public get getCorrectAnswers():number {
    return this.correctAnswers
  }

  public get getTotalQuestions():number {
    return this.totalQuestions
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

  public resetGame():void {
    this.gameHasEnded = false
  }

}
