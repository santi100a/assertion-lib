export declare class AssertionError<E = unknown, A = unknown> extends Error implements AssertOptionalParams<E, A> {
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
    constructor(expected: E, actual: A, operator?: string);
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
export declare function assert(condition: boolean, errorParams?: AssertOptionalParams<true, boolean>): void;
/**
 * Asserts that the type of `val` is `expectedType`.
 * Throws an {@link AssertionError} otherwise.
 *
 * @param {unknown} val An expression to assert its type.
 * @param {string} expectedType The type to assert.
 * @returns {void} Nothing.
 */
export declare function assertType<T = unknown>(val: T, expectedType: Type): void;
declare type Type = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function';
/**
 * The shape of the assertion options.
 */
export interface AssertOptionalParams<E, A> {
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
/**
 * Asserts that the type of `arg` is `expectedType`. Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @param name The name for the expression of `arg`.
 */
export declare function assertTypeOf(arg: any, expectedType: Type, name: string): void;
/**
 * Asserts `arg` is one of `options`.  Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name The name for the expression of `arg`.
 * @param options An array containing the posible values `arg` should have in order for an error not
 * to be thrown.
 */
export declare function assertOneOf(arg: any, name: string, options: any[]): void;
/**
 * Asserts `arg` is an integer. Throws a `TypeError` otherwise.
 *
 * @param arg Any number.
 * @param name The name for the expression for `arg`.
 */
export declare function assertInteger(arg: number, name: string): void;
/**
 * Asserts `arg` is bigger or equal than `min`. Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name The name of the expression for `arg`.
 * @param min The minimum value for `arg`.
 */
export declare function assertMin(arg: any, name: string, min: any): void;
/**
 * Asserts `arg` is smaller or equal than `max`. Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name The name of the expression for `arg`.
 * @param max The maximum value for `arg`.
 */
export declare function assertMax(arg: any, name: string, max: any): void;
/**
 * Asserts `arg` is between `min + 1` and `max + 1` (inclusive). Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name The name of the expression for `arg`.
 * @param min The minimum value for `arg`.
 * @param max The maximum value for `arg`.
 */
export declare function assertRange(arg: any, name: string, min: any, max: any): void;
export {};
