import {Shape} from "./shape";
import {IColor} from "./color";

export class Pentagon extends Shape {
    constructor(c: IColor) {
        super(c);
    }

    applyColor() {
        console.log('Pentagon filled with color ');
        this.color.applyColor();
    }

}
