// import { request } from "chai";

import cors from "cors";
import express from "express";
import { createConnection } from "mysql";

// import { Request, Response } from "express"

const app = express();
const port = 3306;
app.use(cors);
app.use(express.json());

// const mysql = require('mysql');
// DB: sample_data
// game
const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',

});



// get games    

const users = [];
const games = [
    'Call of Shuheb!'
];

app.get("/game", (request: any, response: any) => {
    console.log('request');
    connection.query('SELECT * FROM sample_data.game;', (error, results) => {
        if (error) {
            console.log(error);
        };
        console.log(results);
        response.send(results);
    });
})










app.post("/game", (request: any, response: any) => {
    // const newText = request.body;

    let newGame = request.body.newGame;
    games.push(newGame);
    response.send(games);

});

app.post('/userWithGame', (request: any, response: any) => {
    let userName = request.body.userName;
    let game = request.body.gameName;
    users.push({ userName, games: [game] });
    response.send(users);
})



// app.listen(port, () => {
//     console.log('server is now listening on port:', port)
// })