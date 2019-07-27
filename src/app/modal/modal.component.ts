import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnChanges {

  @Input()
  public displayModal:string

  @Input()
  public modalMessage:string

  @Output()
  public modalDisplayNone:EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  public closeModal():void {
    this.displayModal = 'none'
    this.modalDisplayNone.emit('none')
  }

}
