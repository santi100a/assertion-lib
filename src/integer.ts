/**
 * Asserts `arg` is an integer. Throws a `TypeError` otherwise.
 *
 * @param arg Any number.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 */
function assertInteger(arg: number, name: string): void;

/**
 * Asserts `arg` is an integer. Throws a `TypeError` otherwise.
 *
 * @param arg Any number.
 */
function assertInteger(arg: number): void;
function assertInteger(arg: number, name = 'arg') {
	function __isInteger(n: number) {
		return n - Math.floor(n) <= 0;
	}
	if (!__isInteger(arg))
		throw new TypeError(
			`"${name}" must be an integer. Got "${arg}" of type "${typeof arg}".`
		);
}
assertInteger.assertInteger = assertInteger;
export = assertInteger;
