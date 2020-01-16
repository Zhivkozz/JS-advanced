function name(imput) {
    let num = 1;
    let result = []

    for (let i = 0; i < imput.length; i++) {
        if (imput[i]=== "add")  {
            result.push(num);
        } else {result.pop()};
       // console.log(imput[i])
        num++;
    }
    return result.length===0 ? "Empty" : result.join("\n")
} //100/100
console.log(name(	[
    'add', 
    'add', 
    'remove', 
    'add', 
    'add'
    
]	
));
