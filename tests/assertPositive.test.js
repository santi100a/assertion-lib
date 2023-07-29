describe('assertPositive_function', () => {
    const { assertPositive } = require('../cjs/assert-positive.js');

    // Tests that assertPositive does not throw when num is zero
    it("test_positive_zero", () => {
        expect(() => assertPositive(0)).not.toThrow();
    });

    // Tests that assertPositive does not throw when num is positive
    it("test_positive_positive", () => {
        expect(() => assertPositive(5)).not.toThrow();
    });

    // Tests that assertPositive throws a TypeError when num is negative
    it("test_positive_negative", () => {
        expect(() => assertPositive(-5)).toThrow(TypeError);
    });

    // Tests that assertPositive throws a TypeError when num is a string
    it("test_positive_string", () => {
        expect(() => assertPositive("5")).toThrow(TypeError);
    });

    // Tests that assertPositive throws a TypeError when num is an object
    it("test_positive_object", () => {
        expect(() => assertPositive({})).toThrow(TypeError);
    });

    // Tests that assertPositive throws a TypeError when num is a boolean
    it("test_positive_boolean", () => {
        expect(() => assertPositive(true)).toThrow(TypeError);
    });
});
