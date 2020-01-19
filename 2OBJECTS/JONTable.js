function name(array) {
    console.log("<table>");
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        let spl = element.split(",")
        let name = spl[0].split(":")[1].slice(1,-1);
        let pro = spl[1].split(":")[1].slice(1,-1) // remove first and last element
        let sal = spl[2].split(":")[1].slice(0,-1) // remove the last element
        console.log("<tr>");
        console.log(`<td>${name}</td>`);
        console.log(`<td>${pro}</td>`);
        console.log(`<td>${sal}</td>`);
        console.log("</tr>");
    }
    console.log("</table>");
}
//100/100
{/* <table>
	<tr>
		<td>Pesho</td>
		<td>Promenliva</td>
		<td>100000</td>
	</tr>
</table> */}

name(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
)