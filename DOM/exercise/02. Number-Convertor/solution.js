function solve() {
    const selectMenuTo = document.getElementById("selectMenuTo")
    let result;
    document.querySelector("#container > button").addEventListener("click", convert)
    function convert() {
        let number = Number(document.getElementById("input").value);
        if (selectMenuTo.value === "binary") {
            result = decimalToBynary(number)

        } else if (selectMenuTo.value === "hexadeicmal") {
            result = decimalToXexadecimal(number)
        }
        appendResult(result)
    }
    function decimalToXexadecimal(number) {
        return number.toString(16).toUpperCase();
    }
    function decimalToBynary(number) {
        return (number >>> 0).toString(2);
        // console.log(a);


    }
    function appendResult(result) {
        document.getElementById("result").value = result

    }

    function createSelectMenuOptions() {
        let binaryOption = document.createElement("option");
        binaryOption.textContent = "Binary";
        binaryOption.value = "binary";
        selectMenuTo.appendChild(binaryOption);
        let hexadeicmalOption = document.createElement("option");
        hexadeicmalOption.textContent = "Hexadeicmal";
        hexadeicmalOption.value = "hexadeicmal";
        selectMenuTo.appendChild(hexadeicmalOption);



    }
    createSelectMenuOptions()

}
//50/100