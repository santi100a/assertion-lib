import assertTypeOf = require('./type-of');

/**
 * Asserts `arg` is one of `choices`. Throws a `TypeError` otherwise.
 *
 * @param arg The value that's expected to be included within `choices`.
 * @param name The name of the variable or expression being asserted, for the `TypeError`'s message.
 * @param choices An array containing the posible values `arg` should have in order for an error not
 * to be thrown.
 */
function assertOneOf<T = unknown>(
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
function assertOneOf<T = unknown>(
	arg: unknown,
	name: string,
	choices: T[],
	comparator: (a: unknown, b: T) => boolean
): void;
/** Implementation */
function assertOneOf<T = unknown>(
	arg: unknown,
	name: string,
	choices: T[],
	comparator: (a: unknown, b: T) => boolean = (a, b) => a === b
) {
	function __indexOf(arr: unknown[], item: T) {
		for (const idx in arr) {
			if (comparator(arr[idx], item)) return arr[idx];
		}
		return -1;
	}
	if (typeof comparator === 'boolean')
		throw new TypeError(
			'The `shallow` argument is no longer valid. Please pass a function instead.'
		);
	else if (typeof comparator !== 'function')
		assertTypeOf(comparator, 'function', 'comparator');
	if (__indexOf(choices, arg as T) === -1)
		throw new TypeError(
			`"${name}" must be one of "${choices.join(
				', '
			)}". Got "${arg}" of type "${typeof arg}".`
		);
}
assertOneOf.assertOneOf = assertOneOf;
export = assertOneOf;
