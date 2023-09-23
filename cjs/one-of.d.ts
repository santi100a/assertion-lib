/**
 * Asserts `arg` is one of `choices`. Throws a `TypeError` otherwise.
 *
 * @param arg The value that's expected to be included within `choices`.
 * @param name The name of the variable or expression being asserted, for the `TypeError`'s message.
 * @param choices An array containing the posible values `arg` should have in order for an error not
 * to be thrown.
 */
declare function assertOneOf<T = unknown>(
	arg: unknown,
	name: string,
	choices: T[]
): void;
/**
 * Asserts `arg` is one of `choices`, using `comparator` to compare `arg` against each choice.
 * Throws a `TypeError` otherwise.
 *
 * **WARNING:**
 * **Since v2, the `shallow` argument is no longer valid -- it has been replaced with `comparator`.**
 *
 * This is done so you can use this library without the need to install `@santi100/equal-lib`, whilst also
 * adding flexibility to use custom comparison logic or the deep equality library of your choice.
 *
 * @param arg The value that's expected to be included within `choices`.
 * @param name An expression name to be put in the `TypeError`'s message.
 * @param choices An array containing the posible values `arg` should have in order for an error not
 * to be thrown.
 * @param comparator A custom comparator to add, for instance, deep equality!
 */
declare function assertOneOf<T = unknown>(
	arg: unknown,
	name: string,
	choices: T[],
	comparator: (a: unknown, b: T) => boolean
): void;
declare namespace assertOneOf {
	var assertOneOf: typeof import('./one-of');
}
export = assertOneOf;
