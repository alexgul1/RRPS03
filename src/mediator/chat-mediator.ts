import {User} from "./user";

export interface IChatMediator {
    sendMessage: (msg: string, user: User) => void;
    addUser: (user: User) => void;
}

export class ChatMediator implements IChatMediator {
    private users: Array<User>;

    constructor() {
        this.users = new Array<User>();
    }

    public addUser(user: User) :void {
        this.users.push(user);
    }

    public sendMessage(msg: string, user: User): void {
        this.users.forEach((rUser) => {
            if (rUser !== user) {
                rUser.receive(msg);
            }
        })
    }
}
