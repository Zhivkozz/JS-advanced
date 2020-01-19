function solve (num) {
    return function (addent) {
        return addent + solve
        
    }
}
let add5 = solve(5);
console.log(add5(2));
console.log(add5(3));
