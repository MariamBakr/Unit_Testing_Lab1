
const index=require('../Lab1/index')

const assert = require("assert")
const exp = require('constants')
const { describe } = require('mocha')
const expect = require("chai").expect
const assertChai = require("chai").assert
const should = require("chai").should()


//Test case 1:function takes a string  it will return a string
describe("test capitalizetext function",function(){
   it("capitalizetext function given string and returns a string",function(){
    expect(index.capitalizeText('iti')).to.be.a('string')
   })

 //Test case 2: function takes a string and return it after capitalize it

 it("capitalizetext function takes a string and return it capitalized",function(){
    expect(index.capitalizeText('iti')).to.be.equal("ITI")
 })

 //Test case 3: function takes number it will throw type error says parameter should be string

 it("capitalizetext function if given numbers: throw type error stating that parameter should be a string",function(){
    expect(function(){index.capitalizeText(4).throw("parameter should be string")})})


//Test case 4: if the input iti , the returned value  will not equal to hello

it("capitalizetext function if the input iti , the returned value  will not equal to hello",function(){
    expect(index.capitalizeText('iti')).to.be.not.equal("hello")
})

})


///problem2///


describe("test createArray function",function(){
    it("createArray function return value of type array, includes 1 and of length 3",function(){
        expect(index.createArray(3)).to.be.an("array").that.includes(1).that.lengthOf(3)
    })
})

let i=1

describe("increment i before every function call",function(){
    beforeEach(function(){
        i ++
        console.log(i)
    })
    it("createArray function return value of type array, includes 1 and of length 3",function(){
        expect(index.createArray(3)).to.be.an("array").that.includes(1).that.lengthOf(3)
    })
    it("createArray function return value of type array, includes 1 and of length 3",function(){
        expect(index.createArray(3)).to.be.an("array").that.includes(1).that.lengthOf(3)
    })
})

  //make pending test case

  describe("pending case trial",function(){
    it.skip("createArray function return value of type array, includes 1 and of length 3",function(){
        expect(index.createArray(3)).to.be.an("array").that.includes(1).that.lengthOf(3)
    })
  })

//Bonus-->//try to delay the testing process 5 seconds

// describe("increase default time",function(){
//     it("test",(done)=>{
//         setTimeout(done(),3000)
//         assert.ok(true)
//         expect(index.createArray(3)).to.be.an("array")
//     })
// })



