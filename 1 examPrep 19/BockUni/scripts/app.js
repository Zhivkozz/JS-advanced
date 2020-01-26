function solve() {
    const [titleInput, yearInput,priceInput]= Array.from(document.querySelectorAll('input'));
    const addBtn = document.querySelector('button');
    const totalProfitHeather = Array.from(document.querySelectorAll('h1'))[1];
    const [oldShelf, newShelf] = Array.from(document.getElementsByClassName('bookShelf'));
    let totalSum = 0;
    addBtn.addEventListener("click", function(e){
        e.preventDefault()
    }) 
}