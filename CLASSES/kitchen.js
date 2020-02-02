class Kitchen {
  constructor(budget) {
    this.budget = budget;
    this.menu = {};
    this.productsInStock = {};
    this.actionsHistory = [];
  }
  loadProducts(products) {
    for (let index = 0; index < products.length; index++) {
      const element = products[index];
      let splitted = element.split(" ");
      let product = splitted[0];
      let quantity = Number(splitted[1]);
      let price = splitted[2];
      let total = quantity * price;
      let message = "";
      if (this.budget >= price) {
        if (typeof this.productsInStock[product] === "undefined") {
          this.productsInStock[product] = quantity;
        } else {
          this.productsInStock[product] =
            this.productsInStock[product] + quantity;
        }
        this.budget = this.budget - price;
        message = `Successfully loaded ${product} ${quantity}`;
        this.actionsHistory.push(message);
      } else {
        message = `There was not enough money to load ${product} ${quantity}`;
        this.actionsHistory.push(message);
      }
    }
    // console.log(this.productsInStock);
    return this.actionsHistory.join("\n").trim();
  }
  addToMenu(meal, neededProducsString, price) {
    let message1 = "";
    // let neededProducsSplit = neededProducs.split();
    // let productName = neededProducsSplit[0];
    // let productQuantity = neededProducsSplit[1];
    let neededProducs = {}; // 'Flour 0.5'
    let ingArr = [];
    if (typeof this.menu[meal] === "undefined") {
      for (let ingredient of neededProducsString) {
        ingArr = ingredient.split(" ");
        neededProducs[ingArr[0]] = Number(ingArr[1]);
      }
      this.menu[meal] = [neededProducs, price];
      let mealsNum = Object.keys(this.menu).length;
      message1 = `Great idea! Now with the ${meal} we have ${mealsNum} meals in the menu, other ideas?`;
      // console.log(this.menu);
      return message1;
    } else {
      message1 = `The ${meal} is already in our menu, try something different.`;
      // console.log(this.menu);
      return message1;
    }
  }
  showTheMenu() {
    let menuArray = [];
    let menuItem = "";
    if (Object.keys(this.menu).length > 0) {
      for (let key of Object.keys(this.menu)) {
        let mealPrice = this.menu[key][1];
        menuItem = `${key} - $ ${mealPrice}`;
        menuArray.push(menuItem);
      }
      return menuArray.join("\n").trim();
    } else {
      return "Our menu is not ready yet, please come later...";
    }
  }
  makeTheOrder(order) {
    if (typeof this.menu[order] === "undefined") {
      return `There is not ${order} yet in our menu, do you want to order something else?`;}
  //   } else {
  //     if (aaaa) {
  //       return `Your order (${order}) will be completed in the next 30 minutes and will cost you ${mealPrice}.`;
  //     } else {
  //       return `For the time being, we cannot complete your order (${order}), we are very sorry..."`;
  //     }
  //   }
  }
}
//33/100
// let kitchen = new Kitchen(1000);
// // console.log(
// //   kitchen.loadProducts([
// //     "Banana 10 5",
// //     "Banana 20 10",
// //     "Strawberries 50 30",
// //     "Yogurt 10 10",
// //     "Yogurt 500 1500",
// //     "Honey 5 50"
// //   ])
// //);
// console.log(kitchen.showTheMenu());
// console.log(
//   kitchen.addToMenu(
//     "frozenYogurt",
//     ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
//     9.99
//   )
// );
// console.log(
//   kitchen.addToMenu(
//     "Pizza",
//     [
//       "Flour 0.5",
//       "Oil 0.2",
//       "Yeast 0.5",
//       "Salt 0.1",
//       "Sugar 0.1",
//       "Tomato sauce 0.5",
//       "Pepperoni 1",
//       "Cheese 1.5"
//     ],
//     15.55
//   )
// );
// console.log(
//   kitchen.addToMenu(
//     "frozenYogurt",
//     ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
//     9.99
//   )
// );
// console.log(kitchen.showTheMenu());
