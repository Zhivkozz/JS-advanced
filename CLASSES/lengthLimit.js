class Stringer {
    constructor(string, length) {
        this.innerString = string
        this.innerLength = Number(length)
    }
    increase(length) {
        this.innerLength += length;
    }
    decrease(length) {
        this.innerLength = Math.max(0, this.innerLength - length)
    }
    toString() {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerLength) + "..."
        } else if (this.innerString.length <= this.innerLength) { return this.innerString }
        return "..."
    }
}
//100/100

