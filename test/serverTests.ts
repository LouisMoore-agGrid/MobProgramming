import { expect, use } from "chai";
import chaiHttp from "chai-http";
import e from "cors";
import { config } from "dotenv";
import express from "express";
import { createConnection } from "mysql";
import { resolveTypeReferenceDirective } from "typescript";
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

  class MyPromise<T> {
    private status = "PENDING";
    private subscribers: ((result: T) => void)[] = [];
    private result:T;

    constructor(
      resolveCb: (resolver: (result: T) => void) => void
    ) {
      resolveCb((result) => this.onDone(result))
    }

    onDone(result: T): void {
      this.status = "RESOLVED";
      this.result = result;
      this.subscribers.forEach(subscriber => {
        subscriber(result);
      })
    }

    getCurrentStatus(): string {
      return this.status
    }

    then(thenCb: (result: T) => void) {
      if (this.status === 'RESOLVED'){
        thenCb(this.result);
        return;
      }
      
      this.subscribers.push(thenCb)
    }
  }

  it('should resolve a promise with a number', () => {
    const myPromise = new MyPromise((resolve) => {
      setTimeout(() => {
        resolve(5);
      }, 500)
    })

    expect(myPromise.getCurrentStatus()).to.equal("PENDING")

    myPromise.then((result) => {
      expect(myPromise.getCurrentStatus()).to.equal("RESOLVED")
      expect(result).to.equal(5)
    });
  })

  it('should resolve a promise with a string', () => {
    const myPromise = new MyPromise((resolve) => {
      setTimeout(() => {
        resolve('a');
      }, 500)
    })

    expect(myPromise.getCurrentStatus()).to.equal("PENDING")

    myPromise.then((result) => {
      expect(myPromise.getCurrentStatus()).to.equal("RESOLVED")
      expect(result).to.equal('a')
    });
  })

  it('should resolve a promise with a string sync', () => {
    const myPromise = new MyPromise((resolve) => {
      resolve('a');
    });

    expect(myPromise.getCurrentStatus()).to.equal("RESOLVED")

    let itResolved = false;
    myPromise.then((result) => {
      itResolved = true;
      expect(myPromise.getCurrentStatus()).to.equal("RESOLVED")
      expect(result).to.equal('a')
    });

    expect(itResolved).to.be.true;
  })

  it.skip("Connects to the database", () => {
    connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
      if (err) throw err
      expect(rows[0].solution).to.equal(2);
    })
    // connection.end();
  })
  // })


  // describe("Games Table Test", ()=>{
  it.skip("adds a game to games table", (done) => {
    DAO.addGame(testGame)
    console.log('something')

    DAO.getGames().then((response) => {
      done();
      expect(response.length).to.equal(1)
    });


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