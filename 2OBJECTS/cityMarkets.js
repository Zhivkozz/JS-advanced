function name(params) {
let towns = params.map (x => x.split(" ->").shift())
let products = params.map (x => x.split("->").splice(1))
let aaa =  params.map (x => x.split("->"))
let obj = {}
 //console.log(towns)
 for (let i = 0; i < towns.length; i++) {
     if (typeof obj[towns[i]]==="undefined"){
         obj[towns[i]] =[products[i]];
         
     }
       else{ obj[towns[i]].push(products[i]) } 
  }
  for (let key of Object.keys(obj)){
    console.log(`Town - ${key}`)
 // console.log(obj.Pernik)
    for (let pr of obj[key] ){
  
        let item = pr.shift().trim()
        let aa = pr.pop().split(":")
         
         let cena = (aa[0])*(aa[1])
        //  console.log(pr)
       
        
        console.log (`$$$${item} : ${cena}`)
    }

    }
}

//100/100


let a = [
'Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3']
let test = [
'Las Vegas -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Pernik -> Chereshas -> 1000 : 0.3',
'Sofia -> Audi  -> 200 : 100000',
]
name(test)
// Town - Sofia
// $$$Laptops HP : 400000
// $$$Raspberry : 300000000
// $$$Audi Q7 : 20000000
// Town - Montana
// $$$Portokals : 200000
// $$$Qgodas : 4000
// $$$Chereshas : 300
