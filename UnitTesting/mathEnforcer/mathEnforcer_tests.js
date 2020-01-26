let  mathEnforcer = require ("./mathEnforcer.js");
let expect = require("chai").expect 
let assert = require("chai").assert
let should = require("chai").should

describe ("mathEnforcer", function(){
    describe ("testSet1", function(){

        it ("is a function", function(){
           expect(mathEnforcer).to.be.a("object")
        })
        it ("is a function", function(){
            expect(mathEnforcer.addFive).to.be.a("function")
         })
        it ("pass invalid string", function(){
            let actual = mathEnforcer.addFive(5)//odd
            assert.equal(actual, 10)
        });
        it ("pass invalid integer", function(){
            let actual = mathEnforcer.addFive ("ddd");//odd
            assert.equal(actual, undefined)   
        });
        it ("pass invalid string", function(){
            let actual = mathEnforcer.addFive(-5)//odd
            assert.equal(actual, 0)
        });
      
        it ("pass invalid string", function(){
            let actual = mathEnforcer.addFive(0.1)//odd
            assert.equal(actual, 5.1)
        });
    })
    describe ("testSet2", function(){
        it ("is a function", function(){
            expect(mathEnforcer.subtractTen).to.be.a("function")
         })
        it ("pass invalid string", function(){
            let actual = mathEnforcer.subtractTen(10)//odd
            assert.equal(actual, 0)
        });
        it ("pass invalid integer", function(){
            let actual = mathEnforcer.subtractTen ("ddd");//odd
            assert.equal(actual, undefined)   
        });
        it ("pass invalid string", function(){
            let actual = mathEnforcer.subtractTen(-20)//odd
            assert.equal(actual, -30)
        });
        it ("pass invalid string", function(){
            let actual = mathEnforcer.subtractTen(10)//odd
            assert.equal(actual, 0)
        });
    })
    describe ("testSet3", function(){

        it ("is a function", function(){
            expect(mathEnforcer.sum).to.be.a("function")
         })
        it ("pass invalid ", function(){
            let actual = mathEnforcer.sum(10, 10)//odd
            assert.equal(actual, 20)
        });
        it ("pass invalid integer", function(){
            let actual = mathEnforcer.sum ("ddd", 2);//odd
            assert.equal(actual, undefined)   
        });
        it ("pass invalid integer", function(){
            let actual = mathEnforcer.sum ("ddd", "dd");//odd
            assert.equal(actual, undefined)   
        });
        it ("pass invalid integer", function(){
            let actual = mathEnforcer.sum (1, "ff");//odd
            assert.equal(actual, undefined)   
        });
        it ("pass invalid ", function(){
            let actual = mathEnforcer.sum(10)//odd
            assert.equal(actual, undefined)
        });
        it ("pass invalid ", function(){
            let actual = mathEnforcer.sum(0.1, 10)//odd
            assert.equal(actual, 10.1)
        });
        it ("pass invalid ", function(){
            let actual = mathEnforcer.sum(-10, -10)//odd
            assert.equal(actual, -20)
        });
    })
})
//85/100