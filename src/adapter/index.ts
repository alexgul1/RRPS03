import {SocketAdapter} from "./socket-adapter";
import {Volt} from "./volt";

const getVoltTestFunc = (socketAdapter: SocketAdapter, i: number): Volt  => {
    switch (i) {
        case 3: return socketAdapter.get3Volt();
        case 12: return socketAdapter.get12Volt();
        case 120: return socketAdapter.get120Volt();
        default: return socketAdapter.get120Volt();
    }
}

const socketAdapter: SocketAdapter = new SocketAdapter();
const v3 = getVoltTestFunc(socketAdapter, 3);
const v12 = getVoltTestFunc(socketAdapter, 12);
const v120 = getVoltTestFunc(socketAdapter, 120);


console.log(`v3 volts using SocketAdapter = ${v3.getVolts()}`);
console.log(`v12 volts using SocketAdapter = ${v12.getVolts()}`)
console.log(`v120 volts using SocketAdapter = ${v120.getVolts()}`)
