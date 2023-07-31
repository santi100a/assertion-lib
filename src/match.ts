import assertTypeOf = require('./type-of');

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
function assertMatch(str: string, re: RegExp, name?: string): void;
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
function assertMatch(str: string, matcher: Matchable, name?: string): void;
/** Implementation */
function assertMatch(
	str: string,
	matcher: RegExp | Matchable,
	name = 'str'
): void {
	assertTypeOf(str, 'string', 'str');
	assertTypeOf(name, 'string', 'name');
    assertTypeOf(matcher, 'object', 'matcher');
    if (matcher instanceof RegExp) {
        // regular expression
        if (!matcher.test(str)) throw new TypeError(`"${name}" must match the pattern "${
            matcher.toString()
        }". Got "${str}".`);
    } else {
        // Matchable
        if (typeof Symbol === 'undefined') return;
        const doesMatch = (matcher[Symbol.match](str)?.length ?? 0) > 0;
        if (!doesMatch)
            throw new TypeError(`"${
                name
            }" must match the provided object. "matcher" returned an empty array when called with "${
                str
            }".`);
    }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace assertMatch {
    export interface Matchable {
        [Symbol.match](string: string): RegExpMatchArray | null;
    }
}

export = assertMatch;
