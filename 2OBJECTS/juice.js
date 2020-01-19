function name(params) {
    let keysToBe = []
    let a
    let values = []
    let splitted = params.map(x => x.split("=>")) 
    let obj ={}
    for (let i = 0; i < Object.keys(splitted).length; i++) {
       keysToBe.push (splitted[i][0].slice(0,-1))
       values.push (Number(splitted[i][1])  )
    }
    for (let i = 0; i < keysToBe.length; i++) {
        if (typeof obj[keysToBe[i]]==="undefined"){
            obj[keysToBe[i]] =values[i];
            if (values[i]>=1000)
           { a = ~~(values[i]/1000) 
            console.log(`${keysToBe [i]} => ${a}`)}
        } else{obj[keysToBe[i]] = obj[keysToBe[i]] + values[i]}
     }
    //  for (let key of Object.keys(obj) )
    //  {
    
    //  if (obj[key]>=1000)
    //   { a = ~~((obj[key])/1000) 
    //     console.log(`${key} => ${a}`);
      //  } 
    
  //  }

}
name (['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

)