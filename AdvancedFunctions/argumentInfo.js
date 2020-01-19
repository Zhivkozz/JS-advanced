function name() {
    let counterMap = new Map()
    for (let arg of arguments) {
        argType = typeof (arg);
        console.log(`${argType}: ${arg}`)
        if(counterMap.get(argType) === undefined) 
           {counterMap.set(argType, 0 )}
           counterMap.set(argType, counterMap.get(argType)+1)
    }
    [...counterMap].sort((a, b)=> b[1]-a[1]).forEach(md=>{
        console.log(`${md[0]} = ${md[1]}`);
    })
}
//100/100
name('cat', 55, 'cc', 42, function () { console.log('Hello world!'); })