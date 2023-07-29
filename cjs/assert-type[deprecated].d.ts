import { Type } from './core';
/**
 * Asserts that the type of `val` is `expectedType`.
 * Throws an {@link AssertionError} otherwise.
 *
 * @param val An expression whose type is to be asserted.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @deprecated Use {@link assertTypeOf} instead.
 */
export declare function assertType<T = unknown>(val: T, expectedType: Type): void;
