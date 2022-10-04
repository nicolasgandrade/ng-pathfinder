export default class Node {
  row: number;
  col: number;
  isInitial: boolean;
  isFinal: boolean;

  constructor(row: number, col: number, isInitial = false, isFinal = false) {
    this.row = row;
    this.col = col;
    this.isInitial = isInitial;
    this.isFinal = isFinal;
  }
}
