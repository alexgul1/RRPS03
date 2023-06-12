export class Computer {
  private HDD: string;
  private RAM: string;
  private isGraphicsCardEnabled: boolean;
  private isBluetoothEnabled: boolean;

  public getHDD(): string {
    return this.HDD;
  }

  public getRAM(): string {
    return this.RAM;
  }

  public getIsGraphicsCardEnabled(): boolean {
    return this.isGraphicsCardEnabled;
  }

  public getIsBluetoothEnabled(): boolean {
    return this.isBluetoothEnabled;
  }

  private constructor(builder: any) {
    this.HDD = builder.HDD;
    this.RAM = builder.RAM;
    this.isGraphicsCardEnabled = builder.isGraphicsCardEnabled;
    this.isBluetoothEnabled = builder.isBluetoothEnabled;
  }

  // builder class
  public static ComputerBuilder = class {
    private HDD: string;
    private RAM: string;
    private isGraphicsCardEnabled: boolean;
    private isBluetoothEnabled: boolean;

    constructor(hdd: string, ram: string) {
      this.HDD = hdd;
      this.RAM = ram;
    }

    public setGraphicsCardEnabled(isGraphicsCardEnabled: boolean): this {
      this.isGraphicsCardEnabled = isGraphicsCardEnabled;
      return this;
    }

    public setBluetoothEnabled(isBluetoothEnabled: boolean): this {
      this.isBluetoothEnabled = isBluetoothEnabled;
      return this;
    }

    public build(): Computer {
      return new Computer(this);
    }
  };
}
