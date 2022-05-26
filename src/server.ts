import cors from "cors";
import express from "express";
import { createConnection } from "mysql";
import { GameController } from "./controller/gameController";
import GameDAO from "./dao/gameDAO";

const app = express();
app.use(cors);
app.use(express.json());

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
});

const gameDAO = new GameDAO(connection);
const gameController = new GameController(gameDAO);
// get games    

// register game
// register user
// associate in third table


const users = [];
const games = [
    'Call of Shuheb!'
];

app.get("/game", (request: any, response: any) => {
    gameController.retrieveGames().then(games => {
        response.send(games);
    })
})

app.post("/game", (request: any, response: any) => {
    let gameName = request.body.newGame;
    gameController.createGame(gameName).then(games => {
        response.send(games);
    });
});

app.post('/userWithGame', (request: any, response: any) => {
    //game and user controller
    let userName = request.body.userName;
    let game = request.body.gameName;
    users.push({ userName, games: [game] });
    response.send(users);
})