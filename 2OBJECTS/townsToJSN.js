
function convertor (data) {
    let keys = [];
    
    let keysTobe = data[0].split("|");
  // console.log(data.length)
    
    // let a = Object.keys(keysTobe).length;
    // let b = (Object.keys(data).length);
    for (let i = 0; i < keysTobe.length; i++ )
    {
        if (keysTobe[i] !== ""){
            keys.push(keysTobe[i].trim());
        }
    }
    let values = [];
    
    for (let i = 1; i < data.length; i++ ){
        let row = data[i].split("|");
         let valuesToBe = []; 
         for (let j = 0; j < row.length; j++ ){
              if (row[j] !== ""){
                  let value = Number(row[j]);
                  if (isNaN(value)) {
                      value = row[j].trim();
                  } else {
                      value = Math.floor(value *100) / 100
                  }

            valuesToBe.push(value);
            }
           }
     values.push(valuesToBe)
       
    }
let result = [];
    for (let i = 0; i < values.length; i++ ){
        let obj = {}
         for (let j = 0; j < keys.length; j++ ){
         obj[keys[j]] = values[i][j]
            }
           
     result.push(obj)
       
    }

     console.log(result)
 
     
}
convertor(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)