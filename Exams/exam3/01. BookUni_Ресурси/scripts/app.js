function solve() {
 

  function createNew(name, year, price) {
   
    let Shelf = document.getElementById("outputs").children[1].children[1];
    let div = document.createElement("div");
    div.classList.add("book");
    let par = document.createElement("p");
    par.innerHTML = `${name} [${year}]`;
    let BuyBtn = document.createElement("button");
    BuyBtn.innerHTML = `Buy it only for ${price} BGN`;
    BuyBtn.addEventListener("click", function(e) {
      e.preventDefault();
      let string = document.getElementsByTagName("body")[0].children[2];
      let a = string.innerHTML;
      let cifra = Number(a.split(" ")[3]);
      string.innerHTML = `Total Store Profit: ${(cifra + Number(price)).toFixed(2)} BGN`;
      this.parentNode.parentNode.removeChild(
        this.parentNode
      );
    });
    let moveBtn = document.createElement("button")
    moveBtn.innerHTML = "Move to old section"
    moveBtn.addEventListener("click", function(e) {
        e.preventDefault();
        createOld(name, year, price);
        this.parentNode.parentNode.removeChild(
        this.parentNode
      );

    })
    div.appendChild(par);
    div.appendChild(BuyBtn);
    div.appendChild(moveBtn)
    Shelf.appendChild(div);
  }
  function createOld(name, year, priceNew) {
    let price = (priceNew - priceNew * 0.15).toFixed(2);
    let oldShelf = document.getElementById("outputs").children[0].children[1];
    let div = document.createElement("div");
    div.classList.add("book");
    let par = document.createElement("p");
    par.innerHTML = `${name} [${year}]`;
    let BuyBtn = document.createElement("button");
    BuyBtn.innerHTML = `Buy it only for ${(Number(price)).toFixed(2)} BGN`;
    BuyBtn.addEventListener("click", function(e) {
      e.preventDefault();
      let string = document.getElementsByTagName("body")[0].children[2];
      let a = string.innerHTML;
      let cifra = Number(a.split(" ")[3]);
      string.innerHTML = `Total Store Profit: ${(cifra + Number(price)).toFixed(2)} BGN`;
      this.parentNode.parentNode.removeChild(
        this.parentNode
      );
    });
    div.appendChild(par);
    div.appendChild(BuyBtn);
    oldShelf.appendChild(div);
  }
  let addB = document.getElementsByTagName("button")[0];
  addB.addEventListener("click", function(e) {
    e.preventDefault();
    let elName = document.getElementsByTagName("input")[0];
    let elYear = document.getElementsByTagName("input")[1];
    let elPrice = document.getElementsByTagName("input")[2];
    let name = elName.value;
    let year = elYear.value;
    let price = elPrice.value;
    // console.log(name, year, price);
    if (year > 1999) {
      createNew(name, year, price);
    } else {
      createOld(name, year, price);
    }
  });
}
//75/100