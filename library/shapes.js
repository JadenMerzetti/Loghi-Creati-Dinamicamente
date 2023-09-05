class Logo {
    constructor(shape, text) {
        this.shape = shape;
        this.text = text;
    }
}

class Details extends Logo {
    constructor(shapeColor, textColor, shape, text) {
        super(shape, text);
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }
}


