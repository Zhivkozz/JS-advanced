function name(params) {
    let obj = {}
   let key 
   let val
    for (let index = 0; index < params.length; index+=2) {
    key = params[index]
    val =Number( params[index+1])
        obj[key] = val;

        
    }
   console.log(obj)
    
}
//100/100