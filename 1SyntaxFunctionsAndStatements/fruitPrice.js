function fruit (kind, amaunt, price) {
let money = amaunt*price/1000
    console.log(`I need $${money.toFixed(2)} to buy ${(amaunt/1000).toFixed(2)} kilograms ${kind}.`)
}
//100/100
fruit ('apple', 1563, 2.35)