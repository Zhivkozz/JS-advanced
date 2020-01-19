function add() {
    let sum = 0;
    return function add(num) {
        sum += num;
        add.toString = function () {
            return sum;
        }
        return add;
    }
};
//100/100
add(1)(6)(-3)