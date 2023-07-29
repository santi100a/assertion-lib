/**
 * Asserts `arg` is smaller or equal than `max`. Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `TypeError`'s message.

 * @param max The maximum value for `arg`.
 */
function assertMax(arg: unknown, name: string, max: unknown): void;
/** Implementation */
function assertMax(arg: unknown, name: string, max: unknown) {
	// @ts-expect-error: It's alright to have these be any type.
	if (arg > max)
		throw new RangeError(
			`"${name}" must be smaller than or equal to ${max}. Got "${arg}" of type "${typeof arg}".`
		);
}
assertMax.assertMax = assertMax;
export = assertMax;
