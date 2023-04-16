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
 * @param val An expression whose type is to be asserted.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @deprecated Use {@link assertTypeOf} instead.
 */
export declare function assertType<T = unknown>(val: T, expectedType: Type): void;
export declare type Type = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function';
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
 * @param arg An expression whose type is to be asserted.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 */
export declare function assertTypeOf(arg: any, expectedType: Type, name?: string): void;
/**
 * Asserts `arg` is one of `choices`.  Throws a `TypeError` otherwise.
 *
 * @param arg The value that's expected to be included within `choices`.
 * @param name An expression name to be put in the `TypeError`'s message.
 * @param choices An array containing the posible values `arg` should have in order for an error not
 * to be thrown.
 * @param shallow Whether or not to use shallow equality (default deep equality is powered by
   `@santi100/equal-lib` 😉).
 */
export declare function assertOneOf<T = unknown>(arg: any, name: string, choices: T[], shallow?: boolean): void;
/**
 * Asserts `arg` is an integer. Throws a `TypeError` otherwise.
 *
 * @param arg Any number.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 */
export declare function assertInteger(arg: number, name?: string): void;
/**
 * Asserts `arg` is bigger than or equal than `min`. Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `TypeError`'s message.
 * @param min The minimum value for `arg`.
 */
export declare function assertMin(arg: any, name: string, min: any): void;
/**
 * Asserts `arg` is smaller or equal than `max`. Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `TypeError`'s message.

 * @param max The maximum value for `arg`.
 */
export declare function assertMax(arg: any, name: string, max: any): void;
/**
 * Asserts `arg` is between `min + 1` and `max + 1` (inclusive). Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `TypeError`'s message.
 * @param min The minimum value for `arg`.
 * @param max The maximum value for `arg`.
 */
export declare function assertRange(arg: any, name: string, min: any, max: any): void;
/**
 * Asserts `arg` is an Array. Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 */
export declare function assertArray(arg: any, name?: string): void;
/**
 * Asserts `arg` is an instance of `clas`. Throws a `TypeError` otherwise.
 *
 * @param arg An object whose class is to be asserted to be `clas`.
 * @param clas Any valid constructor.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
export declare function assertInstanceOf<T = any>(arg: any, clas: new (...args: any[]) => T, name?: string): void;
/**
 * Asserts `arg` is smaller than `max`. Throws a `TypeError` otherwise.
 *
 * @param arg The value whose value is to be asserted to be smaller than `max`.
 * @param max The maximum value `arg` is allowed to have.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
export declare function assertExclusiveMax(arg: any, max: any, name?: string): void;
/**
 * Asserts `arg` is bigger than `min`. Throws a `TypeError` otherwise.
 *
 * @param arg The value whose value is to be asserted to be bigger than `max`.
 * @param min The minimum value `arg` is allowed to have.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
export declare function assertExclusiveMin(arg: any, min: any, name?: string): void;
