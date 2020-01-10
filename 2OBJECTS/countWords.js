function name(str) {
    let data = str[0].match(/\w+/gim); // array
    let obj ={}
    for (let index = 0; index < data.length; index++) {
    if (typeof obj[data[index]]==="undefined"){
        obj[data[index]] =0;
    }
    obj[data[index]]++;
}
    console.log(JSON.stringify(obj))
}
//100/100
name(['JS devs use Node.js for server-side JS.-- JS for devs'])