function aggregate (params) {
    const add = (x, y)=> x+y;
    const addInverce = (x, y)=> x+(1/y);
    const concat = (x, y)=> (x+y).toString();
   console.log(params.reduce(add, params.shift()))  
   console.log(params.reduce(addInverce,  1)  )
   console.log(params.reduce(concat,  1 ))
}
aggregate ([1, 2, 3])