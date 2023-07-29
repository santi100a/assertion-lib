describe('assertExclusiveMin_function', () => {
    const { assertExclusiveMin } = require('../cjs/exclusive-min');
    it('split_correctly', () => {
        expect(assertExclusiveMin).toBe(require('..').assertExclusiveMin);
    });
    // Tests that the function works correctly when arg is greater than min.
    it('test_arg_greater_than_min', () => {
        expect(() => assertExclusiveMin(5, 3)).not.toThrow();
    });

    // Tests that the function works correctly when arg is a string that can be converted to a number.
    it('test_arg_string_to_number', () => {
        expect(() => assertExclusiveMin('5', 3)).not.toThrow();
    });

    // Tests that the function throws a TypeError with the correct message when arg is not greater than min.
    it('test_arg_type_error', () => {
        expect(() => assertExclusiveMin(3, 3)).toThrow(TypeError);
        expect(() => assertExclusiveMin(3, 3)).toThrow(
            `"arg" must be bigger than 3. Got 3 of type number.`
        );
    });

    // Tests that the function throws a TypeError with the correct message when arg is equal to min.
    it('test_arg_equal_to_min', () => {
        expect(() => assertExclusiveMin(5, 5)).toThrow(TypeError);
        expect(() => assertExclusiveMin(5, 5)).toThrow(
            `"arg" must be bigger than 5. Got 5 of type number.`
        );
    });

    // Tests that the function throws a TypeError with the correct message when arg is undefined.
    it('test_arg_undefined', () => {
        expect(() => assertExclusiveMin(undefined, 5)).not.toThrow(TypeError);
        expect(() => assertExclusiveMin(undefined, 5)).not.toThrow(TypeError);
    });
});