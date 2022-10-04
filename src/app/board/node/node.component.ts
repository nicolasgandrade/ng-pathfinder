import { Component, OnInit, Input } from '@angular/core';
import Node from 'src/app/models/node';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent implements OnInit {
  @Input() node!: Node;

  constructor() {}

  ngOnInit(): void {}
}
