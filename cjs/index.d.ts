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
declare function assert(condition: boolean, errorParams?: AssertOptionalParams<true, boolean>): void;
/**
 * Asserts that the type of `val` is `expectedType`.
 * Throws an {@link AssertionError} otherwise.
 *
 * @param {unknown} val An expression to assert its type.
 * @param {string} expectedType The type to assert.
 * @returns {void} Nothing.
 */
declare function assertType<T = unknown>(val: T, expectedType: Type): void;
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
