function isAllSameDigit(number) {
let a = 2;
    const arrayOfDigits = Array.from(String(number), Number);

    for (var i = 0; i < arrayOfDigits.length; i++) {
        if (arrayOfDigits[0] != arrayOfDigits[i]){
            console.log(false);
             a = 5
            break}      
    }
    if (a===2) {console.log(true);}
    
    console.log(arrayOfDigits.reduce((acc, cur)=> acc+cur)) 
}
//100/100
//isAllSameDigit(1111)
isAllSameDigit(1234)