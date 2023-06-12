import { IChatMediator } from "./chat-mediator";

export abstract class User {
  protected mediator: IChatMediator;
  protected name: string;

  constructor(mediator: IChatMediator, name: string) {
    this.mediator = mediator;
    this.name = name;
  }

  public abstract send(msg: string): void;
  public abstract receive(msg: string): void;
}

export class UserImpl extends User {
  constructor(mediator: IChatMediator, name: string) {
    super(mediator, name);
  }

  public send(msg: string) {
    console.log(`${this.name}: sending message = ${msg}`);
    this.mediator.sendMessage(msg, this)
  }

  public receive(msg: string) {
    console.log(`${this.name}: received message = ${msg}`);
  }
}
