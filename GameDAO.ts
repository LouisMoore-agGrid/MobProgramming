

const addGameSQL = require('./gameSQL').addGameSQL;
const getAllGamesSQL = require('./gameSQL').getAllGamesSQL;
const deleteGameSQL = require('./gameSQL').deleteGameSQL;

class GameDAO {
  constructor(readonly  connection1) {}

  addGame(gameName) {
    this.connection1.query(
   addGameSQL(gameName),
      (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      }
    );
  }

  getGames() {
    this.connection1.query(getAllGamesSQL, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
        return result;
    });
  }

  deleteGame(gameName) {
    this.connection1.query(
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