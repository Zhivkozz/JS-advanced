let  lookupChar = require ("./charLookup.js");
let expect = require("chai").expect 
let assert = require("chai").assert
let should = require("chai").should

describe ("lookupChar", function(){

    it ("is a function", function(){
       expect(lookupChar).to.be.a("function")
    })
    it ("pass invalid string", function(){
        let actual = lookupChar (2,3);//odd
        assert.equal(actual, undefined)
    });
    it ("pass invalid integer", function(){
        let actual = lookupChar ("ddd","dd");//odd
        assert.equal(actual, undefined)   
    });
    it ("pass invalid range", function(){
        let actual = lookupChar ("ddd", 4);//odd
        assert.equal(actual, "Incorrect index" )  
    });
    it ("pass empty", function(){
        let actual = lookupChar ("", 1);
        assert.equal(actual, "Incorrect index")   
    });
    it ("pass valid", function(){
        let actual = lookupChar ("abc", 0);//odd
        assert.equal(actual, "a" )  
    });
    it ("pass valid2", function(){
        let actual = lookupChar ("ABCD", 1);//odd
        assert.equal(actual, "B" )  
    });
    it ("pass float", function(){
        let actual = lookupChar ("aaaa", 1.2);//even
        assert.equal(actual, undefined)
    });
    it ("bigger infex", function(){
        let actual = lookupChar ("abc", -5);//odd
        assert.equal(actual,  "Incorrect index" )  
    });
})
//100/100