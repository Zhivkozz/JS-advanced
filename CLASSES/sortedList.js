class List {
  constructor(param) {
    this.list = [];
    this.size = 0;
  }

  add(params) {
    this.list.push(params);
    this.list.sort(function(a, b) {
      return a - b;
    });
    this.size++;
    return this.list;
  }

  get(params) {
    if (params < this.size && params >=0) {
      return this.list[params];
    }
  }
  remove(params) {
    if (params < this.size && params >=0) {
    this.list.splice(params, 1);
    this.list.sort(function(a, b) {
      return a - b;
    });
    this.size--;
    return this.list;}
  }
   size() {
    return this.size;
  }
}
// 100/100
