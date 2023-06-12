import {Volt} from "./volt";

export class Socket {
    public getVolt(): Volt {
        return new Volt(120);
    }
}
