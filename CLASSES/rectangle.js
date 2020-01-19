class Rectangle {
    constructor(width, heigth, color) {
        this.width = width;
        this.heigth = heigth;
        this.color = color;}
        calcArea () {return this.width*this.heigth}
    }
    let rect = new Rectangle (4, 2, "red")
    console.log (rect.color)
    console.log(rect.calcArea());
    console.log(rect);
    class RectWithName extends Rectangle {
        constructor(width, heigth, color, name)
        { super(width, heigth, color)
        this.name = name;}
       
    }

    let RectGo6o = new RectWithName (2, 3, "murgav", "Asen4o" )
    console.log(RectGo6o);