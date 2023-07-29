/**
 * Asserts `num` is either zero or a positive number. Throws a `TypeError` otherwise.
 *
 * @param num The number to check for positivity or equality to zero.
 * @param name The name to display in the `TypeError`'s message ("arg" by default).
 */
declare function assertPositive(num: number, name?: string): void;
declare namespace assertPositive {
    var assertPositive: typeof import("./positive");
}
export = assertPositive;
