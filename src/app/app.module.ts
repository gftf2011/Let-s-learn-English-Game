import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { PainelComponent } from './painel/painel.component';
import { TrysComponent } from './trys/trys.component';
import { ProgressComponent } from './progress/progress.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    PainelComponent,
    TrysComponent,
    ProgressComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
