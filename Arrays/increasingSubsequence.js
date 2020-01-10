"use strict"
function name(paramss) {
  const  params = Object.values(paramss); 
    let result = params.slice(0, 1)
   console.log(typeof params)
   // result.push(params[0])
    for (let i=1; i < params.lenght; i++)
    
    {console.log(aaaaa);
        
        if(params[i-1] < params[i]) {
        result.push(params[i])
    }} 
    console.log(result);
}
name([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )