import { Component, OnInit, Output, EventEmitter, OnDestroy  } from '@angular/core';

import { StringUtil } from '../infraestructure/StringUtil';
import { Sentence } from '../models/sentence.model';
import { SENTENCES } from './sentence-mock';
import { Heart } from '../models/heart.model';
import { EndGame } from '../models/endGame.model';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit , OnDestroy{

  public readonly INSTRUCTION:string = "Traduza a frase abaixo"

  public currentAnswerDisplayed:number

  public sentences:Array<Sentence>
  public hearts:Array<Heart>

  @Output()
  public endgameEvent: EventEmitter<EndGame> = new EventEmitter()

  private readonly LOSE:string = "Você perdeu!"
  private readonly WIN:string = "Você ganhou!"

  private answer:string

  private progressIndicator:number
  private wrongAnswerCounter:number

  constructor() { }

  ngOnInit() {
    this.answer = ""
    this.progressIndicator = 0
    this.currentAnswerDisplayed = 0
    this.wrongAnswerCounter = 0
    this.initHearts()
    this.setSentencesToPascalCase()
  }

  ngOnDestroy(){

  }

  public checkAnswer(): void {
    try {
      if (StringUtil.toPascalCase(this.answer) == this.sentences[this.currentAnswerDisplayed].getSentencePt()) {
        alert("A resposta está correta!")
        this.progressIndicator += (100 / (this.sentences.length))
        this.currentAnswerDisplayed++
        this.eraseAnswer()
      } else {
        alert("A resposta está errada!")
        this.hearts[this.wrongAnswerCounter].setHeart(false)
        this.wrongAnswerCounter++
      }
    } catch (Error) {
      console.log(Error.message)
    } finally {
      this.winingCondition()
    }
  }

  public updateAnswer(answer: Event):void {
    this.answer = ((<HTMLInputElement>answer.target).value).trim()
  }

  private setSentencesToPascalCase(): void {
    this.sentences = SENTENCES
    if (this.sentences == null || this.sentences.length == 0) {
      return
    }
    for(let i:number = 0; i < this.sentences.length; i++) {
      this.sentences[i].setSentenceEn(StringUtil.toPascalCase(this.sentences[i].getSentenceEn()))
      this.sentences[i].setSentencePt(StringUtil.toPascalCase(this.sentences[i].getSentencePt()))
    }
  }

  private eraseAnswer(): void {
    (<HTMLInputElement>document.getElementById('answerField')).value = ""
  }

  private initHearts():void {
    this.hearts = [
      new Heart(true),
      new Heart(true),
      new Heart(true)
    ]
  }

  private winingCondition(): void {
    if (this.wrongAnswerCounter === 3) {
      this.endgameEvent.emit(new EndGame(this.LOSE, true))
    } else if (this.currentAnswerDisplayed === this.sentences.length) {
      this.endgameEvent.emit(new EndGame(this.WIN, true))
    } else {
      return
    }
  }

}
