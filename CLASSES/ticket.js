function solve(imput, prop) {
class Ticket {
    constructor(destination, price, status,){
        this.destination = destination;
        this.price = Number(price);
        this.status = status
    }
}

  return imput.reduce((prev, line) => {
        let [destination, price, status]=line.split("|")
        let ticket = new Ticket (destination, price, status)
        prev.push(ticket)
        return prev
    },[]).sort((a,b)=>{
        if (typeof a[prop] === "string")
        {return a[prop].localeCompare(b[prop])}
        else{return a[prop] - b[prop]}
    })
}
//100/100
console.log( solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|available',
'Philadelphia|132.20|departed',
'Chicago|140.20|available',
'Dallas|144.60|sold',
'New York City|206.20|sold',
'New York City|240.20|departed',
'New York City|305.20|departed'],
''));