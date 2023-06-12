import {IColor} from "./color";

export class RedColor implements IColor {
    public applyColor() {
        console.log("red.");
    }
}
