describe('assertRange', () => {
    const { assertRange } = require('../cjs/range');
    test('"assertRange" is a valid function', () => {
        expect(assertRange).toBeInstanceOf(Function);
    });
    test(`"assertRange" doesn't throw an error if the argument fits the range`, () => {
        expect(() => assertRange(30, 'num', 15, 33)).not.toThrow(TypeError);
    });
    test(`"assertRange" throws an error if the argument is smaller than the lower limit`, () => {
        expect(() => assertRange(45, 'num', 50, 100)).toThrow(RangeError);
    });
    test(`"assertRange" throws an error if the argument is bigger than the upper limit`, () => {
        expect(() => assertRange(450, 'num', 50, 100)).toThrow(RangeError);
    });
});