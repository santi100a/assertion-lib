/**
 * Asserts `arg` is smaller than `max`. Throws a `TypeError` otherwise.
 *
 * @param arg The value whose value is to be asserted to be smaller than `max`.
 * @param max The maximum value `arg` is allowed to have.
 * @param name An expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
declare function assertExclusiveMax(
	arg: unknown,
	max: unknown,
	name: string
): void;
/**
 * Asserts `arg` is smaller than `max`. Throws a `TypeError` otherwise.
 *
 * @param arg The value whose value is to be asserted to be smaller than `max`.
 * @param max The maximum value `arg` is allowed to have.
 * @since 1.0.8
 */
declare function assertExclusiveMax(arg: unknown, max: unknown): void;
declare namespace assertExclusiveMax {
	var assertExclusiveMax: typeof import('./exclusive-max');
}
export = assertExclusiveMax;
