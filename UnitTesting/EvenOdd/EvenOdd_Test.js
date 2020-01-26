let isOddOrEven = require ("./EvenOdd.js")
let expect = require("chai").expect 
let assert = require("chai").assert
let should = require("chai").should
describe ("isOddOrEven function", function(){
    it ("pass number to retun undefined", function(){
        let actual = isOddOrEven (2);//undefined
        assert.equal(actual, undefined)
    });
    it ("is a function", function(){
       expect(isOddOrEven).to.be.a("function")
    })
    it ("pass number to retun odd", function(){
        let actual = isOddOrEven ("sss");//odd
        assert.equal(actual, "odd")
    });
    it ("pass number to retun even", function(){
        let actual = isOddOrEven ("aaaa");//even
        assert.equal(actual, "even")
    });

})
//100/100