function name(str, order) {
    // let str = params[0]
    // let order = params[1]
    if (order === "asc") {
        str.sort((a, b) => a - b)
    }
    else {
        str.sort((a, b) => b - a);} 
         return str;
} //100/100
name([14, 7, 17, 6, 8], 'a')