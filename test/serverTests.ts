import { expect, use } from "chai";
import chaiHttp from "chai-http";
import { config } from "dotenv";
import express from "express";
import { createConnection } from "mysql";
import GameDAO from "../GameDAO";
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
connection.connect()

const DAO = new GameDAO(connection);

describe("Connecting to DB test", () => {


  after(function () {
    connection.end();
  })
  it("Connects to the database", () => {
    connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
      if (err) throw err
      expect(rows[0].solution).to.equal(2);
    })
    // connection.end();
  })
  // })


  // describe("Games Table Test", ()=>{
  it("adds a game to games table", (done) => {
    DAO.addGame(testGame)
    console.log('something')

    DAO.getGames().then(done);

    // GET BELOW TO WORK 
    // connection.query(`SELECT * FROM sample_data.game`, (err, rows, fields) => {
    //   if (err) throw err
    //   const gameNames = rows.map(row => row.gameName)
    //   console.log(Array.isArray(rows))
    //   expect(gameNames.includes(testGame)).to.be.true;
    // })

  })

  it.skip('deletes a game from the table', () => {
    connection.query(`DELETE FROM game WHERE gameName='${testGame}'`, (err, rows, fields) => {
      if (err) throw err
      // const gameNames = rows.map(row=>row.gameName)
      // if(Array.isArray(rows)){
      expect(Array.isArray(rows)).to.be.false;
      // }
    })

  })

})