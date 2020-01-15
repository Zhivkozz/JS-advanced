function Solve(params){
    let  x1=params[0];
    let y1 = params[1];
    let x2  = params[2];
    let y2 = params[3];

    // x1y1 to 0,0

    if(Number.isInteger(Math.sqrt(x1*x1 + y1*y1)))
    {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else
    {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if(Number.isInteger(Math.sqrt(x2*x2 + y2*y2)))
    {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else
    {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }


     
    if(Number.isInteger(Math.sqrt(Math.abs(x1-x2)*Math.abs(x1-x2) + Math.abs(y1-y2)*Math.abs(y1-y2))))
    {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else
    {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}
//100/100