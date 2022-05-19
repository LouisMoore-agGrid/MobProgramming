import { Connection } from "mysql";
import { Game } from "../domain/game";
import { addGameSQL, deleteGameSQL, getAllGamesSQL } from "../sql/gameSql";

class GameDAO {
  constructor(readonly connection: Connection) { }

  addGame(gameName: string): Promise<void> {
    let resolveOut = null;
    const response = new Promise<void>((resolve) => {
      resolveOut = resolve;
    });
    this.connection.query(
      addGameSQL(gameName),
      (err, result) => {
        if (err) {
          console.log(err);
        };
        resolveOut();
      }
    );

    return response;
  }

  getGames(): Promise<Game[]> {
    let resolveOut = null;
    const response = new Promise<Game[]>((resolve) => {
      resolveOut = resolve;
    });

    this.connection.query(getAllGamesSQL(), (err, result) => {
      if (err) {
        console.log(err);
      }

      resolveOut(result);
    });

    return response;
  }

}

export default GameDAO;