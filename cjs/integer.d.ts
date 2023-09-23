/**
 * Asserts `arg` is an integer. Throws a `TypeError` otherwise.
 *
 * @param arg Any number.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 */
declare function assertInteger(arg: number, name: string): void;
/**
 * Asserts `arg` is an integer. Throws a `TypeError` otherwise.
 *
 * @param arg Any number.
 */
declare function assertInteger(arg: number): void;
declare namespace assertInteger {
	var assertInteger: typeof import('./integer');
}
export = assertInteger;
