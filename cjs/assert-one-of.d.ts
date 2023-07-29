/**
 * Asserts `arg` is one of `choices`.  Throws a `TypeError` otherwise.
 *
 * @param arg The value that's expected to be included within `choices`.
 * @param name An expression name to be put in the `TypeError`'s message.
 * @param choices An array containing the posible values `arg` should have in order for an error not
 * to be thrown.
 * @param shallow Whether or not to use shallow equality (default deep equality is powered by
   `@santi100/equal-lib` 😉).
 */
export declare function assertOneOf<T = unknown>(arg: unknown, name: string, choices: T[], shallow?: boolean): void;
