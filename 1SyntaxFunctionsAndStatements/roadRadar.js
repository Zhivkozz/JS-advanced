function name(params) {
    let sped = params[0];
    let area = params[1];
    let map = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20}
    let over = sped-map[area] 
        if(over>0 && over<=20) {
            console.log("speeding");}
         if (over>20 && over<=40) {console.log("excessive speeding");}
         if (over>40) {console.log("reckless driving");}

     

  


}
name([21, 'residential'])