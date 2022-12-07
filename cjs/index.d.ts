declare class AssertionError extends Error {
    constructor(expected: unknown, actual: unknown, operator: string);
}
/**
 * Asserts that ```condition``` is truthy. 
 * Throws an {@link AssertionError} otherwise.
 * 
 * @param {boolean} condition A boolean condition to assert.
 * @returns {void} Nothing.
 */
declare function assert(condition: boolean): void;
/**
 * Asserts that the type of ```val``` is ```expectedType```. 
 * Throws an {@link AssertionError} otherwise.
 * 
 * @param {unknown} val An expression to assert its type.
 * @param {string} expectedType The type to assert.
 * @returns {void} Nothing.
 */
declare function assertType(val: unknown, expectedType: string): void;

export { assert, assertType };