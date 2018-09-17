import Shape from "../src/shape";


describe('Rectangle', () => {
    let shape = new Shape();

    it('Should change my position values', () => {
        shape._x = 5;
        shape._y = 10;
        
        shape.move(1, 2);
        
        expect(shape._x).toBe(1);
        expect(shape._y).toBe(2);
    });

    it('should return the color', () => {
        shape._color = "blue";
        expect(shape.getColor()).toEqual("blue");
    });

    it('should change the color', () => {
        shape.changeColor('red');
        expect(shape._color).toEqual('red');
    })
});