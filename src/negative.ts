import { assertTypeOf } from './type-of';

/**
 * Asserts `num` is a negative number. Throws a `RangeError` otherwise.
 *
 * @param num The number to check for negativity.
 * @param name The name to display in the `RangeError`'s message ("arg" by default).
 */
function assertNegative(num: number, name?: string): void;
function assertNegative(num: number, name = 'arg') {
	assertTypeOf(num, 'number', 'val');
	if (num >= 0)
		throw new RangeError(
			`"${name}" must be negative. Got ${num} of type ${typeof num}.`
		);
}
export = assertNegative;
