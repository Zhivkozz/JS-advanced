function uppercase(str) {
    let up = str.match(/\w+/gim).map(x=>x.toUpperCase()).join(", ");
    console.log(up);
}
//100/100
uppercase('Hi, how are you?')