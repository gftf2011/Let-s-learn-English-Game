import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Heart } from '../models/heart.model';

@Component({
  selector: 'app-trys',
  templateUrl: './trys.component.html',
  styleUrls: ['./trys.component.css']
})
export class TrysComponent implements OnInit, OnChanges {
  @Input('heartsRemaining')
  public hearts:Array<Heart>

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
