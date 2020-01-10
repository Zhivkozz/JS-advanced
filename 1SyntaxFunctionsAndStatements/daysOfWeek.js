
function days(d) {
let dayMap ={
"Monday" : 1,
"Tuesday" : 2,
"Wednesday" : 3,
"Thursday" : 4 ,
"Friday" : 5 ,
"Saturday" : 6,
"Sunday" : 7 }

    let a =  dayMap[d] ? dayMap[d] : "error"
    console.log(a)
}
//100/100
days("Mondy")