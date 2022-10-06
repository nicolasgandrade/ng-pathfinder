import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import Node from 'src/app/models/node';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
})
export class NodeComponent implements OnInit {
  @Input() node!: Node;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  runDetection() {
    this.ref.detectChanges();
  }
}
