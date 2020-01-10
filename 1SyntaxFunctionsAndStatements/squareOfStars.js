function stars(n=5) {
    let starSingh = "*"
    let result = new Array (n)
    for (let i = 0; i < n; i++) {
     result[i] = starSingh.repeat(n).split("").join(" ")
    }
    console.log((result).join ("\n"))
}
//100/100
stars (3)