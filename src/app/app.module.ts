import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { NodeComponent } from './board/node/node.component';
import { HeaderComponent } from './header/header.component';
import { ExplanationComponent } from './explanation/explanation.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NodeComponent,
    HeaderComponent,
    ExplanationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
