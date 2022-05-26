

import { Connection } from "mysql";
import { UserToGame } from "../domain/userToGame";

class UserToGameDAO {
  constructor(readonly connection: Connection) { }

  associateUserToGame(userId: string, gameId: string): Promise<UserToGame[]>{
        return 
  }

}

export default UserToGameDAO;