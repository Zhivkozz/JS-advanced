function main (imput) {
    let step = +imput.pop() % imput.lenth;
    return imput.reduceRight((acc, curr)=>{
        if (step){
            acc = [curr,...acc.slice(0,imput.lenght-1)];
            step--;
        }
        return acc;
    
}, [...imput]).join(" ");
} 
console.log(main(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
));