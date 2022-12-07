class AssertionError extends Error {
    constructor(expected, actual, operator) {
        super(`Assertion failed! Expected ${expected}. Got ${actual} when using operator ${operator}.`)
        Object.setPrototypeOf(this, Object.assign(this, { expected, actual, operator }));
    }
}
function assert(condition, { expected, actual, operator }) {
    if (!condition) throw new AssertionError(expected, actual, operator);
}
function assertType(val, expectedType) {
    const wrongType = typeof val !== expectedType;
    if (wrongType) throw new AssertionError(expectedType, typeof val, 'typeof');
}
exports.AssertionError = AssertionError;
exports.assert = assert;
exports.assertType = assertType;