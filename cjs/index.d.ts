declare class AssertionError extends Error {
    constructor(expected: unknown, actual: unknown, operator: string);
}
declare interface AssertOptionalParams {
    /**
     * Expected value for the assertion.
     */
    expected: unknown;
    /**
     * Received value for the assertion.
     */
    actual: unknown;
     /**
     * Optional operator used for the assertion.
     */
    operator?: string;
}
/**
 * Asserts that ```condition``` is truthy. 
 * Throws an {@link AssertionError} otherwise.
 * 
 * @param {boolean} condition A boolean condition to assert.
 * @param {AssertOptionalParams} errorParams Parameters for the AssertionError that will be thrown
 * in case the condition is falsy.
 * @param {unknown} errorParams.expected Expected value for the assertion.
 * @param {unknown} errorParams.actual   Received value for the assertion.
 * @param {string?} errorParams.operator Optional operator used for the assertion.
 * @returns {void} Nothing.
 */
declare function assert(condition: boolean, { expected, actual, operator }?: AssertOptionalParams): void;
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