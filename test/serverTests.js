var chai = require('chai')
  , chaiHttp = require('chai-http');

chai.use(chaiHttp);

const express = require("express");


const app = express();
app.use(express.json());

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database : 'sample_data'    
});
 
const expect = chai.expect
const should = chai.should
const equal = chai.equal
const have = chai.have
const be = chai.be
const a = chai.a
const to = chai.to
const status = chai.status

describe("Connecting to DB test", ()=>{
  it("Connects to the database", () => {
    connection.connect()
    connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
      if (err) throw err
      expect(rows[0].solution).to.equal(2);
    })
    connection.end();
    })
})


describe("Games Table Test", ()=>{
  it("adds a game to games table", () => {
    
    const newGame = 'Settlers of Catan';

    connection.connect()
    connection.query(`insert into game (gameName) values(' ${newGame}')`, (err, rows, fields) => {
      if (err) throw err
    })

    // GET BELOW TO WORK 
    connection.query(`SELECT * FROM sample_data.game')`, (err, rows, fields) => {
      if (err) throw err
      console.log(rows)
      expect(rows[1].gameName).to.equal(newGame);
    })
    connection.end();
    })
})

