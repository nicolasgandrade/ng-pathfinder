import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
