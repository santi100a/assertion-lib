class AssertionError extends Error {
    constructor(expected, actual, operator) {
        super(`Assertion failed! Expected ${expected}. Got ${actual} when using operator ${operator}.`)
        Object.assign(this, { expected, actual, operator });
    }
}
function assert(condition, { expected = null, actual = null, operator = null }) {
    if (!condition) throw new AssertionError(expected, actual, operator);
}
function assertType(val, expectedType) {
    const wrongType = typeof val !== expectedType;
    if (wrongType) throw new AssertionError(expectedType, typeof val, 'typeof');
}

export { assert, assertType };