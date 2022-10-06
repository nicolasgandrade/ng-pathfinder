import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import Node from '../models/node';
import { runDijkstra, getShortestPath } from '../algorithms/dijkstra';
import { NodeComponent } from './node/node.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  rows = 20;
  cols = 45;
  initialNode = new Node(7, 10, true, false, 0);
  finalNode = new Node(7, 30, false, true, Infinity);

  nodes: Array<Array<Node>> = [];

  dijkstraResult: Array<Node> = [];
  shortestPath: Array<Node> = [];

  constructor() {}

  ngOnInit(): void {
    this.createBoard();
    this.dijkstraResult = runDijkstra(this.nodes, this.initialNode, this.finalNode);
    this.shortestPath = getShortestPath(this.dijkstraResult[this.dijkstraResult.length -1])
  }

  createBoard() {
    const boardNodes = [];
    for (let row = 0; row < this.rows; row++) {
      const currentRow = [];
      for (let col = 0; col < this.cols; col++) {
        const node = new Node(
          row,
          col,
          row == this.initialNode.row && col == this.initialNode.col,
          row == this.finalNode.row && col == this.finalNode.col
        );
        currentRow.push(node);
      }
      boardNodes.push(currentRow);
    }

    this.nodes = boardNodes;
  }

  animate(visitedNodes: Array<Node>, shortestPath: Array<Node>) {
    for (let i = 0; i < visitedNodes.length; i++) {
      setTimeout(() => {
        const node = visitedNodes[i];
        document.getElementById(`node-${node.row}-${node.col}`)!.className = 'node visited'
        if (i === visitedNodes.length - 1) {
          this.showShortestPath(shortestPath);
        }
      }, 15 * i);
    }
  }

  showShortestPath(shortest: Array<Node>) {
    for (let i = 0; i < shortest.length; i++) {
      setTimeout(() => {
        const node = shortest[i];
        document.getElementById(`node-${node.row}-${node.col}`)!.className = 'node shortest'
      }, 10 * i);
    }
  }
}
