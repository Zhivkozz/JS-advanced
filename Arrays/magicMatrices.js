
function name(array) {
     function sumofArray(sum, num) { 
        return sum + num; }

   //  params.
 let arr = []
   
    for (let index = 0; index < array.length; index++) {
    let element = array[index].reduce(sumofArray); 
  //  console.log (element)
    arr.push (element);
   }
   if (arr[0]===arr[1] && arr[1]===arr[2]){console.log(true)}
   else{console.log(false)}
}
//100/100

name ([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )





