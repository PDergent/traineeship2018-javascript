import Shape from "./shape";

export default class Rectangle extends Shape {
    constructor(color, x, y, width, height) {
        super(color, x, y);
        _width = width;
        _height = height;
    }
    

    rotate90Degrees() {
        let tempWidth = _width;
        _width = _height;
        _height = tempWidth;
    }

    enlarge(additionalWidth, additionalHeight) {
        _width += additionalWidth;
        _height += additionalHeight;
    }

    shrink(minusWidth, minusHeight) {
        _width -= minusWidth;
        _height -= minusHeight;
    }
}