var chai = require('chai')
  , chaiHttp = require('chai-http');

chai.use(chaiHttp);


const expect = chai.expect
const should = chai.should
const equal = chai.equal
const have = chai.have
const be = chai.be
const a = chai.a
const to = chai.to
const status = chai.status
// const done = mocha.done




describe("ServerTest", ()=>{
    it("connects to the server", ()=>{
        var rootPage = chai.request('http://localhost:8000')
        .get('/').end((error,response)=>{
            expect(response).to.have.status(200)
        })
    })
    it("it gets hello world", ()=>{
        var rootPage = chai.request('http://localhost:8000')
        .get('/').end((error,response)=>{
            expect(response.text).to.equal("hello world")
        })
    })
})



describe("ShuhebsTest",()=>{it("should it return 1",()=>{
    let number = "1"
    expect(number).to.equal("1")
})})