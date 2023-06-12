import {PC} from "./pc";
import {Server} from "./server";
import {Computer} from "./computer";

export class ComputerFactory {
    public static getComputer(type: string, ram: string, hdd: string, cpu: string): Computer|null {
        switch (type) {
            case "PC": {
                return new PC(ram, hdd, cpu);
            }
            case "Server": {
                return new Server(ram, hdd, cpu);
            }
            default:
                return null

        }
    }
}
