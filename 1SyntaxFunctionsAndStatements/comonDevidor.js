function devidor(x, y ) {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
console.log (x)
}
//100/100
devidor(15, 5)