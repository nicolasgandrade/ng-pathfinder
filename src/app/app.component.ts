import { BoardComponent } from './board/board.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(BoardComponent) board!: BoardComponent;

  title = 'Ng Pathfinder';

  triggerVisualizer() {
    this.board.runAnimation();
  }
}
