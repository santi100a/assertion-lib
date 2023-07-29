/**
 * Asserts `arg` is **NEITHER** smaller than `min` **NOR** bigger than `max`.
 * Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `TypeError`'s message.
 * @param min The minimum value for `arg`.
 * @param max The maximum value for `arg`.
 */
declare function assertRange(arg: unknown, name: string, min: unknown, max: unknown): void;
declare namespace assertRange {
    var assertRange: typeof import("./range");
}
export = assertRange;
