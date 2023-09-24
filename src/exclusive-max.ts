/**
 * Asserts `arg` is smaller than `max`. Throws a `RangeError` otherwise.
 *
 * @param arg The value whose value is to be asserted to be smaller than `max`.
 * @param max The maximum value `arg` is allowed to have.
 * @param name An expression name to be put in the `RangeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
function assertExclusiveMax(arg: unknown, max: unknown, name: string): void;
/**
 * Asserts `arg` is smaller than `max`. Throws a `RangeError` otherwise.
 *
 * @param arg The value whose value is to be asserted to be smaller than `max`.
 * @param max The maximum value `arg` is allowed to have.
 * @since 1.0.8
 */
function assertExclusiveMax(arg: unknown, max: unknown): void;
function assertExclusiveMax(arg: unknown, max: unknown, name = 'arg') {
	// @ts-expect-error: It's alright to have these be any type.
	if (arg >= max)
		throw new RangeError(
			`"${name}" must be smaller than ${max}. Got ${arg} of type ${typeof arg}.`
		);
}
assertExclusiveMax.assertExclusiveMax = assertExclusiveMax;
export = assertExclusiveMax;
