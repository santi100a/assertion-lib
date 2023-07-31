describe('assertTypeOf', () => {
    const assertTypeOf  = require('../cjs/type-of');
    test('"assertTypeOf" is a valid function', () => {
        expect(assertTypeOf).toBeInstanceOf(Function);
    });
    test(`"assertTypeOf" doesn't throw an error if the type is correct`, () => {
        expect(() => assertTypeOf(true, 'boolean', 'bool')).not.toThrow();
    });
    test('"assertTypeOf" throws an error if the type is incorrect', () => {
        expect(() => assertTypeOf(false, 'object', 'bool')).toThrow(TypeError);
    });
});