import { Connection } from "mysql";
import { User } from "../domain/user";
import { addUserSql, getAllUsersSql } from "../sql/userSql";

export class UserDAO {

    constructor(private readonly connection: Connection) { }

    addUser(name: string): Promise<void> {
        let resolveOut = null;
        const response = new Promise<void>((resolve) => {
            resolveOut = resolve;
        });
        this.connection.query(
            addUserSql(name),
            (err, result) => {
                if (err) {
                    console.log(err);
                };
                resolveOut();
            }
        );

        return response;
    }

    getUsers(): Promise<User[]> {
        let resolveOut = null;
        const response = new Promise<User[]>((resolve) => {
            resolveOut = resolve;
        });

        this.connection.query(getAllUsersSql(), (err, result) => {
            if (err) {
                console.log(err);
            }

            resolveOut(result);
        });

        return response;
    }
}