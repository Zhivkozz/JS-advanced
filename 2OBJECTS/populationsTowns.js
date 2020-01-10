function name(params) {
    let keysToBe = []
    let values = []
    let splitted = params.map(x => x.split(" <-> ")) 
    let obj ={}
    for (let i = 0; i < Object.keys(splitted).length; i++) {
       keysToBe.push (splitted[i][0])
       values.push (Number(splitted[i][1])  )
    }
    for (let i = 0; i < keysToBe.length; i++) {
        if (typeof obj[keysToBe[i]]==="undefined"){
            obj[keysToBe[i]] =values[i];
        } else{obj[keysToBe[i]] = obj[keysToBe[i]] + values[i]}
     }
    console.log(JSON.stringify(obj) )
}
name (['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000',
'Las Vegas <-> 3000000']
)