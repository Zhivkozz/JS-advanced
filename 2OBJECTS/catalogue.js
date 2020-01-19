function name(params) {
    const alfaSort = (a,b)=>a.localeCompare(b)
let catalogue = {};
for (let line of params){
    let [name, price ] = line.split(' : ');
    price = Number(price);
    let Initial = name[0];
    if(!catalogue.hasOwnProperty(Initial)){
catalogue[Initial]={}
    }
    let products = catalogue[Initial];
     if (  !products.hasOwnProperty(name)){
         products[name]=price;

     }
}
//console.log(catalogue);
let sortedInitials = Object.keys(catalogue)
.sort(alfaSort)
for (let initial of sortedInitials){
    console.log(initial);
    let products = catalogue[initial];
    let sortedProducts = Object.keys(products).sort(alfaSort);
    for(let p of sortedProducts){
        console.log(`  ${p}: ${products[p]}`);
    }
}}
//100/100
name(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)