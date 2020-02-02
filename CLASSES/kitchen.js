class Kitchen {
  constructor(budget) {
    this.budget = budget;
    this.menu;
    this.productsInStock;
    this.actionsHistory;
  }
  loadProducts(products) {
      console.log(products);
  }
  addToMenu(items) {

  }
  showTheMenu() {}
  mkakeTheOrder() {}
}mnbxrrxw`\3333   nn
let kitchen = new Kitchen (1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
