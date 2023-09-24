/**
 * Asserts `num` is either zero or a positive number. Throws a `RangeError` otherwise.
 *
 * @param num The number to check for positivity or equality to zero.
 */
declare function assertPositive(num: number): void;
/**
 * Asserts `num` is either zero or a positive number. Throws a `RangeError` otherwise.
 *
 * @param num The number to check for positivity or equality to zero.
 * @param name The name to display in the `RangeError`'s message ("num" by default).
 */
declare function assertPositive(num: number, name: string): void;
declare namespace assertPositive {
    var assertPositive: typeof import("./positive");
}
export = assertPositive;
