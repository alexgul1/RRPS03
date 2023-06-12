import { IColor } from "./color";

export abstract class Shape {
  protected color: IColor;

  constructor(c: IColor) {
    this.color = c;
  }

  public abstract applyColor(): void;
}
