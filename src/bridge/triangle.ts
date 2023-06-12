import { Shape } from "./shape";
import { IColor } from "./color";

export class Triangle extends Shape {
  constructor(c: IColor) {
    super(c);
  }

  public applyColor() {
    console.log("Triangle filled with color ");
    this.color.applyColor();
  }
}
