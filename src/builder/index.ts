import { Computer } from "./computer";

const computer = new Computer.ComputerBuilder("500 GB", "2 GB")
  .setBluetoothEnabled(true)
  .setGraphicsCardEnabled(true)
  .build();

console.log(computer);
