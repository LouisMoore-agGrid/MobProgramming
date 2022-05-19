import GameDAO from "../dao/gameDAO";
import { Game } from "../domain/game";

export class GameController {

    constructor(private readonly dao: GameDAO) {

    }

    retrieveGames(): Promise<Game[]> {
        return this.dao.getGames();
    }

    createGame(name: string): Promise<Game[]> {
        return this.dao.addGame(name).then(() => {
            return this.dao.getGames();
        })
    }
}