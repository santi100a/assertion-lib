import { assertOneOf } from './one-of';
import { type Type, TYPES } from './core';

/**
 * Asserts that the type of `arg` is `expectedType`. Throws a `TypeError` otherwise.
 *
 * @param arg An expression whose type is to be asserted.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @param name An expression name to be put in the `TypeError`'s message.
 */
function assertTypeOf(arg: unknown, expectedType: Type, name: string): void;
/**
 * Asserts that the type of `arg` is `expectedType`. Throws a `TypeError` otherwise.
 *
 * @param arg An expression whose type is to be asserted.
 * @param expectedType The expected type. Must be one of {@link Type}.
 */
function assertTypeOf(arg: unknown, expectedType: Type): void;
/** Implementation */
function assertTypeOf(arg: unknown, expectedType: Type, name = 'arg') {
	assertOneOf(expectedType, 'expectedType', TYPES);
	if (typeof arg !== expectedType)
		throw new TypeError(
			`"${name}" must be of type "${expectedType}". Got "${arg}" of type "${typeof arg}".`
		);
}
assertTypeOf.assertTypeOf = assertTypeOf;
export = assertTypeOf;
