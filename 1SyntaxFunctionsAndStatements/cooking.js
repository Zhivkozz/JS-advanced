function name(params) {
    let init = params[0]
    let map = {
        'chop': function (x) { return x / 2 },
        'dice': function (x) { return Math.sqrt(x) },
        'spice': function (x) { return x + 1 },
        'bake': function (x) { return x * 3 },
        'fillet': function (x) { return x - (x * 0.2)},
        "rr" : function () { console.log("aaaaaaaaaaaaa");}
    }
    for (let index = 1; index <6 ; index++) {
        init = map[(params[index])](init)
        console.log(init);
        
    }
   //(map.chop(2)); 
    

}
    //100/100

name(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])