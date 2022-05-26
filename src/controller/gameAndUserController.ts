import UserToGameDAO from "../dao/userToGameDAO";
import { UserController } from "./userController";

export class GameAndUserController {
  constructor(
    private readonly dao: UserToGameDAO,
    private readonly userController: UserController
  ) {}

  // associateUserWithGame(userName: string, gameName: string): Promise<User[]> {
  //     // return this.dao.addGameToUser(userName, gameName).then(() => {
  //     //     return this.dao.getUsers();
  //     // })
  // }
}
