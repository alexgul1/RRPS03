import {ChatMediator, IChatMediator} from "./chat-mediator";
import {User, UserImpl} from "./user";

const mediator: IChatMediator = new ChatMediator();

const user1: User = new UserImpl(mediator, "Test1");
const user2: User = new UserImpl(mediator, "Test2");
const user3: User = new UserImpl(mediator, "Test3");
const user4: User = new UserImpl(mediator, "Test4");

mediator.addUser(user1);
mediator.addUser(user2);
mediator.addUser(user3);
mediator.addUser(user4);

user1.send("Hi all!")
