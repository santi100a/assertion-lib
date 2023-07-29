describe('assertNegative_function', () => {
    const { assertNegative } = require('../cjs/assert-negative.js');

    // Tests that assertNegative throws a TypeError when passed 0.
    it("test_negative_zero", () => {
        expect(() => assertNegative(0)).toThrow(TypeError);
    });

    // Tests that assertNegative throws a TypeError when passed a positive number.
    it("test_negative_positive", () => {
        expect(() => assertNegative(5)).toThrow(TypeError);
    });

    // Tests that assertNegative throws a TypeError when passed a non-number value.
    it("test_negative_non_number", () => {
        expect(() => assertNegative("not a number")).toThrow(TypeError);
    });

    // Tests that assertNegative does not throw a TypeError when passed a negative number.
    it("test_negative_negative", () => {
        expect(() => assertNegative(-10)).not.toThrow(TypeError);
    });

    // Tests that assertNegative includes the correct name in the TypeError message.
    it("test_negative_name", () => {
        expect(() => assertNegative(0, 'myNum')).toThrow(`"myNum" must be negative.`);
    });

    // Tests that assertNegative includes the correct message in the TypeError.
    it("test_negative_message", () => {
        expect(() => assertNegative(5, 'myNum')).toThrow(`"myNum" must be negative. Got 5 of type number.`);
    });
});
