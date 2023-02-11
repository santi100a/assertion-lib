class AssertionError<E = unknown, A = unknown> extends Error
implements AssertOptionalParams<E, A> {
    /**
     * Expected value for the assertion.
     */
    readonly expected: E;
    /**
     * Received value for the assertion.
     */
    readonly actual: A;
     /**
     * Optional operator used for the assertion.
     */
    readonly operator?: string;
    constructor(expected: E, actual: A, operator?: string) {
        super(`Assertion failed! Expected ${expected}. Got ${actual} when using operator ${operator}.`)
        this.expected = expected;
        this.actual = actual;
        this.operator = operator;
    }
}
/**
 * Asserts that `condition` is truthy. 
 * Throws an {@link AssertionError} otherwise.
 * 
 * @param {boolean} condition A boolean condition to assert.
 * @param {AssertOptionalParams} errorParams Parameters for the {@link AssertionError} that will be 
 * thrown in case the condition is falsy.
 * @param {unknown} errorParams.expected Expected value for the assertion.
 * @param {unknown} errorParams.actual   Received value for the assertion.
 * @param {string?} errorParams.operator Optional operator used for the assertion.
 * @returns {void} Nothing.
 */
function assert(condition: boolean, errorParams?: AssertOptionalParams<true, boolean>): void {
    const { expected, actual, operator } = errorParams || {};
    if (!condition) throw new AssertionError(expected, actual, operator);
}
/**
 * Asserts that the type of `val` is `expectedType`. 
 * Throws an {@link AssertionError} otherwise.
 * 
 * @param {unknown} val An expression to assert its type.
 * @param {string} expectedType The type to assert.
 * @returns {void} Nothing.
 */
function assertType<T = unknown>(val: T, expectedType: Type): void {
    const wrongType = typeof val !== expectedType;
    if (wrongType) throw new AssertionError(expectedType, typeof val, 'typeof');
}

type Type = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function';
interface AssertOptionalParams<E, A> {
    /**
     * Expected value for the assertion.
     */
    readonly expected: E;
    /**
     * Received value for the assertion.
     */
    readonly actual: A;
     /**
     * Optional operator used for the assertion.
     */
    readonly operator?: string;
}

export { assert, assertType, type AssertOptionalParams };