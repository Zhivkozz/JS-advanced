function solve() {
    const operators = ["+", "-", "/", "*"];
    let elExpressionOutput = document.getElementById("expressionOutput")
    let elResult = document.getElementById("resultOutput")
    document.getElementsByClassName("clear")[0]
        .addEventListener("click", function () {
            elExpressionOutput.innerHTML = ""
            elResult.innerHTML = ""
        })
    let val1 = NaN
    let val2 = NaN
    let operator = NaN
    let result = NaN
    let keys = Array.from(document.getElementsByClassName("keys")[0].children)
    keys.map((b) => b.addEventListener("click", function (e) {
        e.preventDefault();
        let value = e.target.value
         if (operators.includes(value)) {
            elExpressionOutput.innerHTML += ` ${value} `
        } else if (value === "=") {
            console.log(elExpressionOutput.innerHTML);
            
            // if (typeof result === "number") {
            //     elResult.innerHTML = result
            // } else {
            //     elResult.innerHTML = "NaN"
            // }
            try {result = eval(elExpressionOutput.innerHTML)
                elResult.innerHTML = result
            } catch (error)  {
                elResult.innerHTML = "NaN"
            }
        } else{ elExpressionOutput.innerHTML += value }
    }


    ))
}
//100/100