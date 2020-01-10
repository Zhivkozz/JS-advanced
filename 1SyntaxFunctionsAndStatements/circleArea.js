function circleArea(rad) {
    if (typeof rad === "number") {
       console.log (((rad**2)*Math.PI).toFixed(2));
    }
    else(
        console.log(`We can not calculate the circle area, because we receive a ${typeof rad}.`)
    )
}
//100/100
circleArea("jjjjj")