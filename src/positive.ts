import { assertTypeOf } from './type-of';

/**
 * Asserts `num` is either zero or a positive number. Throws a `RangeError` otherwise.
 *
 * @param num The number to check for positivity or equality to zero.
 */
function assertPositive(num: number): void;
/**
 * Asserts `num` is either zero or a positive number. Throws a `RangeError` otherwise.
 *
 * @param num The number to check for positivity or equality to zero.
 * @param name The name to display in the `RangeError`'s message ("num" by default).
 */
function assertPositive(num: number, name: string): void;
function assertPositive(num: number, name = 'num') {
	assertTypeOf(num, 'number', 'num');
	if (num < 0)
		throw new RangeError(
			`"${name}" must be positive or zero. Got ${num} of type ${typeof num}.`
		);
}
assertPositive.assertPositive = assertPositive;
export = assertPositive;
