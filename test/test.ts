var chai1 = require('chai')
  , chaiHttp1 = require('chai-http');

chai1.use(chaiHttp1);


const expect = chai1.expect
const should = chai1.should
const equal = chai1.equal
const have = chai1.have
const be = chai1.be
const a = chai1.a
const to = chai1.to




describe.skip("ServerTest", ()=>{
    it("connects to the server", ()=>{
        var rootPage = chai1.request('http://localhost:8000')
        .get('/').end((error,response)=>{
            expect(response).to.have.status(200)
        })
    })
    it("it gets hello world", ()=>{
        var rootPage = chai1.request('http://localhost:8000')
        .get('/').end((error,response)=>{
            expect(response.text).to.equal("hello world")
        })
    })
})



describe("ShuhebsTest",()=>{it("should it return 1",()=>{
    let number = "1"
    expect(number).to.equal("1")
})})