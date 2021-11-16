// import { request } from "chai";
// import { Request, Response } from "express"
const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;
app.use(cors({}));
app.use(express.json());
const games = [
    'Call of Shuheb!'
];
app.get("/games", (request, response) => {
    response.send(games);
});
app.post("/addGame", (request, response) => {
    // const newText = request.body;
    let newGame = request.body.newGame;
    games.push(newGame);
    response.send(games);
});
app.listen(port, () => {
    console.log('server is now listening on port:', port);
});
//# sourceMappingURL=server.js.map