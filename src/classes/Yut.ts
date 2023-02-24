export default class Yut {
  private _backDo: boolean = false;
  private _history: boolean[] = [];
  constructor({ backDo = false }: { backDo?: boolean }) {
    this._backDo = backDo;
  }
  public get backDo(): boolean {
    return this._backDo;
  }
  roll() {
    const isFlatFaceUpSide = Math.random() > 0.5;
    this.history = [...this.history, isFlatFaceUpSide];
  }
  public get isRolled(): boolean {
    return this.history.length > 0;
  }
  public get isFlipped() {
    return this.history[this.history.length - 1];
  }
  public get history() {
    return this._history;
  }
  public set history(value) {
    this._history = value.slice(-5);
  }
}
