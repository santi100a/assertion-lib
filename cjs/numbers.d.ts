/**
 * Asserts `arg` is smaller than `max`. Throws a `TypeError` otherwise.
 *
 * @param arg The value whose value is to be asserted to be smaller than `max`.
 * @param max The maximum value `arg` is allowed to have.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
export declare function assertExclusiveMax(
	arg: unknown,
	max: unknown,
	name?: string
): void;
/**
 * Asserts `arg` is bigger than `min`. Throws a `TypeError` otherwise.
 *
 * @param arg The value whose value is to be asserted to be bigger than `max`.
 * @param min The minimum value `arg` is allowed to have.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
export declare function assertExclusiveMin(
	arg: unknown,
	min: unknown,
	name?: string
): void;
/**
 * Asserts `num` is either zero or a positive number. Throws a `TypeError` otherwise.
 *
 * @param num The number to check for positivity or equality to zero.
 * @param name The name to display in the `TypeError`'s message ("arg" by default).
 */
export declare function assertPositive(num: number, name?: string): void;
/**
 * Asserts `num` is a negative number. Throws a `TypeError` otherwise.
 *
 * @param num The number to check for negativity.
 * @param name The name to display in the `TypeError`'s message ("arg" by default).
 */
export declare function assertNegative(num: number, name?: string): void;
