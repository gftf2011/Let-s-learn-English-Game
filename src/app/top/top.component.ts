import { Component } from '@angular/core';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.css']
})
export class TopComponent {
    public readonly TITLE: string = "Let's learn English!"
}