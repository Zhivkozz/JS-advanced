// function largest(a, b, c) {

//     if (a > b && a > c) {
//         console.log(`The largest number is ${a}.`);	
//     } 
//     else if (a < b && b > c ){
//         console.log(`The largest number is ${b}.`);
//     }
//      else {
//         console.log(`The largest number is ${c}.`);
//     }
    
// }
//100/100
function largest(... params) {
    console.log(`The largest number is ${Math.max(...params)}.`);
}
//100/100
largest (5, -3, 16)