import Yut from "@/classes/Yut";

const INITIAL_YUTS = Array.from({ length: 3 }, () => new Yut({})).concat([
  new Yut({ backDo: true }),
]);

export type YutCombination = "도" | "개" | "걸" | "윷" | "모" | "빽도";

export default class YutSet {
  private _yuts: Yut[] = [];
  public get yuts(): Yut[] {
    return this._yuts;
  }
  private _history: YutCombination[] = [];
  public get history(): YutCombination[] {
    return this._history;
  }
  public set history(value: YutCombination[]) {
    this._history = value;
  }
  public get lastResult(): YutCombination {
    return this._history[this._history.length - 1];
  }
  constructor({
    initialYuts = INITIAL_YUTS,
  }: { initialYuts?: YutSet["_yuts"] } = {}) {
    this._yuts = initialYuts;
  }
  roll() {
    const yuts = this._yuts;
    for (const yut of yuts) {
      yut.roll();
    }
    const flippedYuts = yuts.filter((yut) => yut.isFlipped);
    const flippedYutsCount = flippedYuts.length;
    const isBackDo = flippedYuts.some((yut) => yut.backDo);
    const result = this.getResultByFlippedYutsCount(flippedYutsCount, isBackDo);
    this._history = [...this._history, result];
  }
  public getResultByFlippedYutsCount(
    flippedYutsCount: number,
    backDoContained: boolean = false
  ) {
    switch (flippedYutsCount) {
      case 0:
        return "모";
      case 1:
        return backDoContained ? "빽도" : "도";
      case 2:
        return "개";
      case 3:
        return "걸";
      case 4:
        return "윷";
      default:
        throw new RangeError("윷의 개수가 4개를 초과했습니다.");
    }
  }
}
