function main(input) {
    let step = +input.pop() % input.length;
    return input.reduceRight((acc, curr) => {
        if (step) {
            acc = [curr, ...acc.slice(0, input.length - 1)];
            step--;
        }
        return acc;

    }, [...input]).join(" ");
}
//100/100
console.log(main(['1', 
'2', 
'3', 
'4', 
'2']

));