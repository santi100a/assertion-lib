import { assertTypeOf } from './type-of';

/**
 * Asserts `num` is either zero or a positive number. Throws a `TypeError` otherwise.
 *
 * @param num The number to check for positivity or equality to zero.
 * @param name The name to display in the `TypeError`'s message ("arg" by default).
 */
function assertPositive(num: number, name?: string): void;
function assertPositive(num: number, name = 'arg') {
	assertTypeOf(num, 'number', 'val');
	if (num < 0)
		throw new TypeError(
			`"${name}" must be positive or zero. Got ${num} of type ${typeof num}.`
		);
}
assertPositive.assertPositive = assertPositive;
export = assertPositive;
