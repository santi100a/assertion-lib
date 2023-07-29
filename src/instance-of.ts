/**
 * Asserts `arg` is an instance of `clas`. Throws a `TypeError` otherwise.
 *
 * @param arg An object whose class is to be asserted to be `clas`.
 * @param clas Any valid constructor.
 * @param name An expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
function assertInstanceOf<T = unknown>(
	arg: unknown,
	clas: new (...args: unknown[]) => T,
	name: string
): void;
/**
 * Asserts `arg` is an instance of `clas`. Throws a `TypeError` otherwise.
 *
 * @param arg An object whose class is to be asserted to be `clas`.
 * @param clas Any valid constructor.
 * @since 1.0.8
 */
function assertInstanceOf<T = unknown>(
	arg: unknown,
	clas: new (...args: unknown[]) => T
): void;
function assertInstanceOf<T = unknown>(
	arg: unknown,
	clas: new (...args: unknown[]) => T,
	name = 'arg'
) {
	try {
		new clas();
	} catch (_) {
		throw new TypeError(
			`"clas" must be a valid constructor. Got ${clas} of type ${typeof clas}.`
		);
	}
	if (!(arg instanceof clas))
		throw new TypeError(
			`${name} must be an instance of ${
				clas.name
			}. Got ${arg} of type ${typeof arg}.`
		);
}
assertInstanceOf.assertInstanceOf = assertInstanceOf;
export = assertInstanceOf;
