function sumOfNumbers(m, n) {
let a = parseInt(m);
let b = parseInt(n);
let sum = 0
for (let index = a; index <=b; index++) {
sum  = sum +index;  
}
console.log(sum)
}

sumOfNumbers ('1', '5' )