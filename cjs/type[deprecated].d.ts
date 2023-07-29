import { type Type } from './core';
/**
 * Asserts that the type of `val` is `expectedType`.
 * Throws an {@link AssertionError} otherwise.
 *
 * @param val An expression whose type is to be asserted.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @deprecated Use {@link assertTypeOf} instead.
 */
declare function assertType<T = unknown>(val: T, expectedType: Type): void;
declare namespace assertType {
    var assertType: typeof import("./type[deprecated]");
}
export = assertType;
