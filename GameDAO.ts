import { Connection } from "mysql";
import { addGameSQL, deleteGameSQL, getAllGamesSQL } from "./gameSQL";



class GameDAO {
  constructor(readonly connection: Connection) { }

  addGame(gameName) {
    this.connection.query(
      addGameSQL(gameName),
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );
  }

  getGames(): Promise<{}[]> {

    // learn how to debug tests in vs code

    let resolveOut = null;
    const response = new Promise<{}[]>((resolve) => {
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

  deleteGame(gameName) {
    this.connection.query(
      deleteGameSQL(gameName),
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );
  }
}

export default GameDAO;