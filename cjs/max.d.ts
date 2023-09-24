/**
 * Asserts `arg` is smaller or equal than `max`. Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `RangeError`'s message.

 * @param max The maximum value for `arg`.
 */
declare function assertMax(arg: unknown, name: string, max: unknown): void;
declare namespace assertMax {
    var assertMax: typeof import("./max");
}
export = assertMax;
