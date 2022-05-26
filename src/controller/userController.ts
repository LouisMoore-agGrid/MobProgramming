import { UserDAO } from "../dao/userDAO";
import { User } from "../domain/user";

export class UserController {
    constructor(private readonly dao: UserDAO) { }

    retrieveUsers(): Promise<User[]> {
        return this.dao.getUsers();
    }

    createUser(name: string): Promise<User[]> {
        return this.dao.addUser(name).then(() => {
            return this.dao.getUsers();
        })
    }



    
}