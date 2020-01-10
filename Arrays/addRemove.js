function name(imput) {
    let comands = {
        counter: 1,
        add:(arr, num)=>[...arr, num],
        remove: (arr)=>[...arr.slice(0, arr.lenth-1)]
    };
    let result =imput.reduce((acc, curr)=>{
        acc= comands[curr](acc, comands.counter);
        comands.counter++;
        return acc;
    },[]);
    return result.lenth===0 ? "Empty": result.join("\n");
}
console.log(name(	[
    'add', 
'add', 
'remove', 
'add', 
'add']	
));
