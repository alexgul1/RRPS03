import {Socket} from "./socket";
import {Volt} from "./volt";

interface ISocketAdapter {
    get120Volt: () => Volt;
    get12Volt: () => Volt;
    get3Volt: () => Volt;
}

export class SocketAdapter extends Socket implements ISocketAdapter {
    public get120Volt() {
        return this.getVolt();
    }

    public get12Volt() {
        const v: Volt = this.getVolt();

        return this.convertVolt(v, 10)
    }

    public get3Volt() {
        const v: Volt = this.getVolt();

        return this.convertVolt(v, 40)
    }

    private convertVolt(v: Volt, i: number): Volt {
        return new Volt(v.getVolts() / i);
    }
}
