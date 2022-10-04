import { Component, OnInit } from '@angular/core';
import Node from '../models/node';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  rows = 15;
  cols = 40;
  initialNode = [7, 10];
  finalNode = [7, 30];

  nodes: Array<Array<Node>> = [];

  constructor() {}

  ngOnInit(): void {
    this.createBoard();
  }

  createBoard() {
    const boardNodes = [];
    for (let row = 0; row < this.rows; row++) {
      const currentRow = [];
      for (let col = 0; col < this.cols; col++) {
        const node = new Node(
          row,
          col,
          row == this.initialNode[0] && col == this.initialNode[1],
          row == this.finalNode[0] && col == this.finalNode[1]
        );
        currentRow.push(node);
      }
      boardNodes.push(currentRow);
    }

    this.nodes = boardNodes;
  }
}
