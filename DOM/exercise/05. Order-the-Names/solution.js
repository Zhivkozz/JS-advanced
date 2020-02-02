function solve() {
    let list = document.querySelectorAll("li")
    document.querySelector("button")
        .addEventListener("click", function (e) {
            e.preventDefault()
            let value = document.querySelector("input").value
            let first = value[0].toUpperCase()
            let index = Number(first.charCodeAt()) - 65;
            let name = first + value.substring(1).toLocaleLowerCase();
            let oldValue = list[index].innerHTML
            if (oldValue === "") {
                list[index].innerHTML = name
            } else {
                list[index].innerHTML += `, ${name}`
            }
            document.querySelector("input").value = ""
        })

}//100/100