describe('assertOneOf', () => {
    const { assertOneOf } = require('../cjs/one-of');
    test('"assertOneOf" is a valid function', () => {
        expect(assertOneOf).toBeInstanceOf(Function);
    });
    test(`"assertOneOf" doesn't throw an error if the argument is in the list`, () => {
        expect(() => assertOneOf(30, 'num', [50, 20, 30])).not.toThrow(TypeError);
        expect(
            () => assertOneOf('hello world', 'str', [
                'everything',
                'oh shucks',
                'hello world'
            ])
        ).not.toThrow(TypeError);
        expect(() => assertOneOf(true, 'bool', [false, true])).not.toThrow(TypeError);
    });
    test(`"assertOneOf" throws an error if the argument is not in the list`, () => {
        expect(() => assertOneOf(45, 'num', [50, 100])).toThrow(TypeError);
    });
});