/**
 * Asserts `arg` is bigger than or equal than `min`. Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `RangeError`'s message.
 * @param min The minimum value for `arg`.
 */
function assertMin(arg: unknown, name: string, min: unknown): void;
function assertMin(arg: unknown, name: string, min: unknown) {
	// @ts-expect-error: It's alright to have these be any type.
	if (arg < min)
		throw new RangeError(
			`"${name}" must be bigger than or equal to ${min}. Got "${arg}" of type "${typeof arg}".`
		);
}
assertMin.assertMin = assertMin;
export = assertMin;
