interface Matchable {
    [Symbol.match](string: string): RegExpMatchArray | null;
}
/**
 * Asserts `str` matches `re`. Throws a `TypeError` otherwise.
 *
 * @param str The string to match against `re`.
 * @param re The regular expression to match `str` against.
 * @param name The displayed name in the `TypeError` thrown if `str` does not match `re`.
 * Defaults to `str`.
 */
declare function assertMatch(str: string, re: RegExp, name?: string): void;
/**
 * Asserts `str` matches `matcher`. Throws a `TypeError` otherwise.
 *
 * @param str The string to be asserted to match against `re`.
 * @param matcher The object to match against. This object must have a `[Symbol.match]` method, like
 * this:
 * ```typescript
 * [Symbol.match](string: string): RegExpMatchArray | null;
 * ```
 * @param name The name to be displayed in the `TypeError` thrown if `str` does not match `matcher`.
 * Defaults to `str`.
 */
declare function assertMatch(str: string, matcher: Matchable, name?: string): void;
declare namespace assertMatch {
    interface Matchable {
        [Symbol.match](string: string): RegExpMatchArray | null;
    }
}
export = assertMatch;
