function solve() {
  let counter = [];
  let totalPriceHolder = Number(0);
  let addElemBTN = document.getElementById("add-new").children[4];
  let myProducts = document.getElementById("myProducts");
  addElemBTN.addEventListener("click", function(e) {
    e.preventDefault();
    let elName = document.getElementById("add-new").children[1];
    let ElQantity = document.getElementById("add-new").children[2];
    let elPrice = document.getElementById("add-new").children[3];
    let valName = elName.value;
    let valQuan = Number(ElQantity.value);
    let valPrice = Number(elPrice.value).toFixed(2);
    let rearyelement = createli(valName, valPrice, valQuan);
    let availableList = document.getElementById("products").children[1];
    availableList.appendChild(rearyelement);
    let saveString = [];
    saveString[valName] = valQuan;
    counter.push(saveString);
    
  });
  let BuyBTN = myProducts.children[2];
  BuyBTN.addEventListener("click", function(e) {
    e.preventDefault();
    myProducts.children[1].innerHTML = "";
    let priceHeather = document.getElementsByTagName("body")[0].children[3];
    priceHeather.innerHTML = "Total Price: 0.00";
  });
  function createmyLi(name1, price1) {
    let myLi = document.createElement("li");
    let strongPrice = document.createElement("strong");
    strongPrice.innerHTML = price1;
    myLi.innerHTML = `${name1}`;
    myLi.appendChild(strongPrice);
    return myLi;
  }

  function createli(name, price, qantity) {
    let li = document.createElement("li");
    let spanName = document.createElement("span");
    spanName.innerHTML = name;
    let stronQa = document.createElement("strong");
    stronQa.innerHTML = `Available: ${qantity}`;
    let div = document.createElement("div");
    let strongPrice = document.createElement("strong");
    let btnAddToClientList = document.createElement("button");
    strongPrice.innerHTML = price;
    btnAddToClientList.innerHTML = "Add to Client's List";
    btnAddToClientList.addEventListener("click", function(e) {
      e.preventDefault();
      let mymyli = createmyLi(name, price);
      let mymyProducts = myProducts.children[1];
      mymyProducts.appendChild(mymyli);
      totalPriceHolder = totalPriceHolder + Number(price);
      let priceHeather = document.getElementsByTagName("body")[0].children[3];
      priceHeather.innerHTML = `Total Price: ${ Number(totalPriceHolder).toFixed(2)}`;
      // console.log(counter[name]);
      // if (counter[name] > 1) {
      //   // stronQa.innerHTML = `Available: ${qantity-1}`;
      //   console.log(">>>>");
      //   this.parentNode.children[1].innerHTML = `Available: ${availableQuantity - 1}`;
      // }else{
      //    console.log("111111");
      // }
      const availableQuantity = parseInt(this.parentNode.parentNode.children[1].innerHTML.split(" ")[1]);

      if (availableQuantity === 1) {
          this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
          
      } else {
          this.parentNode.parentNode.children[1].innerHTML = `Available: ${availableQuantity - 1}`;
          
      }

    });
    div.appendChild(strongPrice);
    div.appendChild(btnAddToClientList);
    li.appendChild(spanName);
    li.appendChild(stronQa);
    li.appendChild(div);
    return li;
  }
   let filterBtn = document.querySelector("#products > div > button")
   filterBtn.addEventListener("click", function (e) {
      e.preventDefault(); 
      let productFilterInput = document.getElementsByTagName("input")[0]
      const filterValue = productFilterInput.value;
      const allAvailableProducts = document.querySelectorAll("#products ul li span");

      allAvailableProducts.forEach(product => {
          if (!product.innerHTML.toLocaleLowerCase().includes(filterValue)) {
              product.parentNode.style.display = "none";
          } else {
              product.parentNode.style.display = "block";
          }
      });

      productFilterInput.value = "";
    })
}
//80/100