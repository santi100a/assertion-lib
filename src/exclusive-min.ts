/**
 * Asserts `arg` is bigger than `min`. Throws a `TypeError` otherwise.
 *
 * @param arg The value whose value is to be asserted to be bigger than `max`.
 * @param min The minimum value `arg` is allowed to have.
 * @since 1.0.8
 */
function assertExclusiveMin(arg: unknown, min: unknown): void;
/**
 * Asserts `arg` is bigger than `min`. Throws a `TypeError` otherwise.
 *
 * @param arg The value whose value is to be asserted to be bigger than `max`.
 * @param min The minimum value `arg` is allowed to have.
 * @param name An expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
function assertExclusiveMin(arg: unknown, min: unknown, name: string): void;
function assertExclusiveMin(arg: unknown, min: unknown, name = 'arg') {
	// @ts-expect-error: It's alright to have these be any type.
	if (arg <= min)
		throw new TypeError(
			`"${name}" must be bigger than ${min}. Got ${arg} of type ${typeof arg}.`
		);
}
assertExclusiveMin.assertExclusiveMin = assertExclusiveMin;
export = assertExclusiveMin;
