import { HeaderComponent } from './header/header.component';
import { BoardComponent } from './board/board.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(BoardComponent) board!: BoardComponent;
  @ViewChild(HeaderComponent) header!: HeaderComponent;

  title = 'Ng Pathfinder';

  triggerVisualizer() {
    this.board.runAnimation();
  }

  disableRunButton(state: boolean) {
    this.header.isButtonDisabled = state;
  }
}
