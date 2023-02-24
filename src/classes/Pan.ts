import YutSet from "@/classes/YutSet";

export default class Pan {
  private _yutSet: YutSet;
  public get yutSet(): YutSet {
    return this._yutSet;
  }
  // private _player: Player;
  // public get player(): Player {
  //   return this._player;
  // }
  constructor({
    yutSet,
  }: // player,
  {
    yutSet: Pan["_yutSet"];
    // player: Pan["_player"];
  }) {
    this._yutSet = yutSet;
    // this._player = player;
  }
  public rollYut() {
    this._yutSet.roll();
    return this._yutSet.lastResult;
  }
}
