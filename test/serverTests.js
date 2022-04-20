var chai = require('chai')
  , chaiHttp = require('chai-http');

chai.use(chaiHttp);

const express = require("express");

const dotenv = require('dotenv');
dotenv.config();


const app = express();
app.use(express.json());

const mysql = require('mysql');



const connection = mysql.createConnection({
    host: process.env.HOST,
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
const testGame = 'Settlers of Catan 6: electric boogaloo';

describe("Connecting to DB test", ()=>{
  before(function() {
    connection.connect()
});

after(function() {
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
  it("adds a game to games table", () => {
    
   

    // connection.connect()
    connection.query(`insert into game (gameName) values('${testGame}')`, (err, rows, fields) => {
      if (err) throw err
    })

    // GET BELOW TO WORK 
    connection.query(`SELECT * FROM sample_data.game`, (err, rows, fields) => {
      if (err) throw err
      const gameNames = rows.map(row=>row.gameName)
      console.log(Array.isArray(rows))
      expect(gameNames.includes(testGame)).to.be.true;
    })
   
    })

    it('deletes a game from the table', ()=>{
      connection.query(`DELETE FROM game WHERE gameName='${testGame}'`,(err, rows, fields) => {
        if (err) throw err
        // const gameNames = rows.map(row=>row.gameName)
        // if(Array.isArray(rows)){
        expect(Array.isArray(rows)).to.be.false;
        // }
      })
      
    })

})
