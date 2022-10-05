export default class Node {
  private _row: number;
  private _col: number;
  private _isInitial: boolean;
  private _isFinal: boolean;
  private _distance: number;
  private _isVisited: boolean;

  constructor(row: number, col: number, isInitial = false, isFinal = false, distance = Infinity, isVisited = false) {
    this._row = row;
    this._col = col;
    this._isInitial = isInitial;
    this._isFinal = isFinal;
    this._distance = distance;
    this._isVisited = isVisited
  }

  public get row() {
    return this._row;
  }

  public set row(row: number) {
    this._row = row;
  }

  public get col() {
    return this._col;
  }

  public set col(col: number) {
    this._col = col;
  }

  public get isInitial() {
    return this._isInitial;
  }

  public set isInitial(state: boolean) {
    this._isInitial = state;
  }

  public get isFinal() {
    return this._isFinal;
  }

  public set isFinal(state: boolean) {
    this._isFinal = state;
  }

  public get distance() {
    return this._distance;
  }

  public set distance(dist: number) {
    this._distance = dist;
  }

  public get isVisited() {
    return this._isVisited;
  }

  public set isVisited(visited: boolean) {
    this._isVisited = visited;
  }
}
