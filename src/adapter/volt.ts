export class Volt {
    private volts: number;

    constructor(v: number) {
        this.volts = v;
    }

    public getVolts(): number {
        return this.volts;
    }

    public setVolts(volts: number): void {
        this.volts = volts;
    }
}
