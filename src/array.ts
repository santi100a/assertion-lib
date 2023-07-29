/**
 * Asserts `arg` is an Array. Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 */
function assertArray(arg: unknown, name?: string): void;
function assertArray(arg: unknown, name = 'arg') {
	if (!(arg instanceof Array))
		throw new TypeError(
			`"${name}" must be an Array. Got "${arg}" of type "${typeof arg}".`
		);
}
assertArray.assertArray = assertArray;
export = assertArray;
