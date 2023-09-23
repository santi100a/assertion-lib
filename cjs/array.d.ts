/**
 * Asserts `arg` is an Array. Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 */
declare function assertArray(arg: unknown, name?: string): void;
declare namespace assertArray {
	var assertArray: typeof import('./array');
}
export = assertArray;
