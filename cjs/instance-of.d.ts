/**
 * Asserts `arg` is an instance of `clas`. Throws a `TypeError` otherwise.
 *
 * @param arg An object whose class is to be asserted to be `clas`.
 * @param clas Any valid constructor.
 * @param name An expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
declare function assertInstanceOf<T = unknown>(arg: unknown, clas: new (...args: unknown[]) => T, name: string): void;
/**
 * Asserts `arg` is an instance of `clas`. Throws a `TypeError` otherwise.
 *
 * @param arg An object whose class is to be asserted to be `clas`.
 * @param clas Any valid constructor.
 * @since 1.0.8
 */
declare function assertInstanceOf<T = unknown>(arg: unknown, clas: new (...args: unknown[]) => T): void;
declare namespace assertInstanceOf {
    var assertInstanceOf: typeof import("./instance-of");
}
export = assertInstanceOf;
