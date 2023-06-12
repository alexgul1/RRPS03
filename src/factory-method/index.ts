import {Computer} from "./computer";
import {ComputerFactory} from "./factory";

const pc = ComputerFactory.getComputer("PC","2 GB","500 GB","2.4 GHz");
const server = ComputerFactory.getComputer("Server","16 GB","1 TB","2.9 GHz");


console.log(`Factory PC Config: ${pc}`);
console.log(`Factory Server Config: ${server}`);

