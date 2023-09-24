/**
 * Asserts `num` is a negative number. Throws a `RangeError` otherwise.
 *
 * @param num The number to check for negativity.
 * @param name The name to display in the `RangeError`'s message ("arg" by default).
 */
declare function assertNegative(num: number, name?: string): void;
export = assertNegative;
