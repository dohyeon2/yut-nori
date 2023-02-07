type Direction = "normal" | `s-${number}`;

export default class Kan {
  private direction: Direction;
  constructor({ direction = "normal" }: { direction?: Direction } = {}) {
    this.direction = direction || "normal";
  }
}
