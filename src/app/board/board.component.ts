import { Component, OnInit } from '@angular/core';
import Node from '../models/node';
import { runDijkstra, getShortestPath } from '../algorithms/dijkstra';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  rows = 20;
  cols = 45;
  initialNode = new Node(
                        Math.floor(Math.random() * 20),
                        Math.floor(Math.random() * 45),
                        true,
                        false,
                        0
                        );
  finalNode = new Node(
                      Math.floor(Math.random() * 20),
                      Math.floor(Math.random() * 45),
                      false,
                      true,
                      Infinity
                      );

  nodes: Array<Array<Node>> = [];

  dijkstraResult: Array<Node> = [];
  shortestPath: Array<Node> = [];

  hasRan = false;

  constructor() {}

  ngOnInit(): void {
    this.setup();
  }

  setup() {
    this.createBoard();
    this.dijkstraResult = runDijkstra(this.nodes, this.initialNode, this.finalNode);
    this.shortestPath = getShortestPath(this.initialNode, this.dijkstraResult[this.dijkstraResult.length -1]);
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

  /* To animate the path, instead of using an "Angular approch", we need to get the elements
  by theirs id's, due to performance problems when running the change detector in small time
  intervals. In the appropriate scenario, we must update the Node data to change its classes
  and then run the change detector to render the new view. */
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
    this.hasRan = true;
  }

  showShortestPath(shortest: Array<Node>) {
    for (let i = 0; i < shortest.length; i++) {
      setTimeout(() => {
        const node = shortest[i];
        document.getElementById(`node-${node.row}-${node.col}`)!.className = 'node shortest'
      }, 30 * i);
    }
  }

  runAnimation() {
    if (this.hasRan) {
      this.clearBoard(this.nodes);

      this.initialNode = new Node(
        Math.floor(Math.random() * 20),
        Math.floor(Math.random() * 45),
        true,
        false,
        0
      );
      this.finalNode = new Node(
        Math.floor(Math.random() * 20),
        Math.floor(Math.random() * 45),
        false,
        true,
        Infinity
      );
      this.setup();
      this.animate(this.dijkstraResult, this.shortestPath);
    } else {
      this.animate(this.dijkstraResult, this.shortestPath);
    }
  }

  clearBoard(board: Array<Array<Node>>) {
    board.forEach(row => {
      row.forEach(n => {
        const node = n;
        document.getElementById(`node-${node.row}-${node.col}`)!.className = 'node';
      });
    });
  }
}
