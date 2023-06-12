export abstract class Computer {
    public abstract getRAM(): string;
    public abstract getHDD(): string;
    public abstract getCPU(): string;

     public toString():string {
        return `RAM = ${this.getRAM()}, HDD = ${this.getHDD()}, CPU = ${this.getCPU()}`;
    }
}
