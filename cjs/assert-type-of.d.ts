import { Type } from './core';
/**
 * Asserts that the type of `arg` is `expectedType`. Throws a `TypeError` otherwise.
 *
 * @param arg An expression whose type is to be asserted.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 */
export declare function assertTypeOf(arg: unknown, expectedType: Type, name?: string): void;
