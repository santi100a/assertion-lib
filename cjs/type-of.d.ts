import { type Type } from './core';
/**
 * Asserts that the type of `arg` is `expectedType`. Throws a `TypeError` otherwise.
 *
 * @param arg An expression whose type is to be asserted.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @param name An expression name to be put in the `TypeError`'s message.
 */
declare function assertTypeOf(arg: unknown, expectedType: Type, name: string): void;
/**
 * Asserts that the type of `arg` is `expectedType`. Throws a `TypeError` otherwise.
 *
 * @param arg An expression whose type is to be asserted.
 * @param expectedType The expected type. Must be one of {@link Type}.
 */
declare function assertTypeOf(arg: unknown, expectedType: Type): void;
declare namespace assertTypeOf {
    var assertTypeOf: typeof import("./type-of");
}
export = assertTypeOf;
