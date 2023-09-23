/**
 * Asserts `arg` is bigger than or equal than `min`. Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `TypeError`'s message.
 * @param min The minimum value for `arg`.
 */
declare function assertMin(arg: unknown, name: string, min: unknown): void;
declare namespace assertMin {
	var assertMin: typeof import('./min');
}
export = assertMin;
