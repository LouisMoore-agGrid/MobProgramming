import { expect, use } from "chai";
import chaiHttp from "chai-http";
import { config } from "dotenv";
import express from "express";
import { createConnection } from "mysql";
import GameDAO from "../src/dao/gameDAO";

use(chaiHttp);
config();

const app = express();
app.use(express.json());

const connection = createConnection({
  host: process.env.HOST,
  user: 'root',
  password: 'password',
  database: 'sample_data'
});

const testGame = 'Settlers of Catan 6: electric boogaloo';
connection.connect();
const dao = new GameDAO(connection);
let id = new Promise((res) => {
  return res;
});

describe("Connecting to DB test", () => {

  after(function () {
    connection.end();
  });

  it("adds a game to games table", () => {
    connection.beginTransaction();
    return dao.getGames().then(response => {
      expect(response.length).to.equal(0);
      return dao.addGame(testGame).then(response => {
        return dao.getGames().then((response) => {
          expect(response.length).to.equal(1);
          connection.rollback();
        });
      });
    });
  })
})