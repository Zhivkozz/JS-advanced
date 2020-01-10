function name(params) {
    let delim = parseInt(params.pop()) 
    for (let i = 0; i < params.length; i = i + delim) {
        console.log(params[i]);
        
    }
}
//100/100
name(['1', 
'2',
'3', 
'4', 
'5', 
'6']
) 