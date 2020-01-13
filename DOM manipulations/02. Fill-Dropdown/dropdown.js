function addItem() {
    const select = document.getElementById("menu");
    const itemTextImput = document.getElementById("newItemText");
    const itemVlueImput = document.getElementById("newItemValue");
    const option = document.createElement("option");
    option.value = itemVlueImput.value
    option.textContent = itemTextImput.value
    select.appendChild(option)
    itemTextImput.value=""
    itemVlueImput.value=""
}
//100/100