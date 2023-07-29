/**
 * Asserts `arg` is **NEITHER** smaller than `min` **NOR** bigger than `max`.
 * Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `TypeError`'s message.
 * @param min The minimum value for `arg`.
 * @param max The maximum value for `arg`.
 */
function assertRange(
	arg: unknown,
	name: string,
	min: unknown,
	max: unknown
): void;
function assertRange(arg: unknown, name: string, min: unknown, max: unknown) {
	// @ts-expect-error: It's alright to have these be any type.
	if (arg > max || arg < min)
		throw new RangeError(
			`"${name}" must be smaller than ${max} and bigger than ${min}. Got "${arg}" of type "${typeof arg}".`
		);
}
assertRange.assertRange = assertRange;
export = assertRange;
