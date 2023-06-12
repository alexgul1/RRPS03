import {Shape} from "./shape";
import {Triangle} from "./triangle";
import {RedColor} from "./red-color";
import {Pentagon} from "./pentagon";
import {GreenColor} from "./green-color";

const triangle: Shape = new Triangle(new RedColor());
const pentagon: Shape = new Pentagon(new GreenColor());

triangle.applyColor();
pentagon.applyColor();
