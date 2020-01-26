let  testObject = require ("./");
let expect = require("chai").expect 
let assert = require("chai").assert
let should = require("chai").should

describe ("testObject", function(){
    describe ("testSet1", function(){

        it ("is a function", function(){
           expect(testObject).to.be.a("function")
        })
        it ("pass invalid string", function(){
            let actual = testObject (2,3);//odd
            assert.equal(actual, undefined)
        });
        it ("pass invalid integer", function(){
            let actual = testObject ("ddd","dd");//odd
            assert.equal(actual, undefined)   
        });
      
    })
    // describe ("testSet2", function(){

    //     it ("is a function", function(){
    //        expect(testObject).to.be.a("function")
    //     })
    //     it ("pass invalid string", function(){
    //         let actual = testObject (2,3);//odd
    //         assert.equal(actual, undefined)
    //     });
    //     it ("pass invalid integer", function(){
    //         let actual = testObject ("ddd","dd");//odd
    //         assert.equal(actual, undefined)   
    //     });
      
    // })
    // describe ("testSet3", function(){

    //     it ("is a function", function(){
    //        expect(testObject).to.be.a("function")
    //     })
    //     it ("pass invalid string", function(){
    //         let actual = testObject (2,3);//odd
    //         assert.equal(actual, undefined)
    //     });
    //     it ("pass invalid integer", function(){
    //         let actual = testObject ("ddd","dd");//odd
    //         assert.equal(actual, undefined)   
    //     });
      
    // })
})