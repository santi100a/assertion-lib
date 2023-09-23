'use strict';
var assertTypeOf = require('./type-of');
/** Implementation */
function assertMatch(str, matcher, name) {
	var _a, _b;
	if (name === void 0) {
		name = 'str';
	}
	assertTypeOf(str, 'string', 'str');
	assertTypeOf(name, 'string', 'name');
	assertTypeOf(matcher, 'object', 'matcher');
	if (matcher instanceof RegExp) {
		// regular expression
		if (!matcher.test(str))
			throw new TypeError(
				'"'
					.concat(name, '" must match the pattern "')
					.concat(matcher.toString(), '". Got "')
					.concat(str, '".')
			);
	} else {
		// Matchable
		if (typeof Symbol === 'undefined') return;
		var doesMatch =
			((_b =
				(_a = matcher[Symbol.match](str)) === null || _a === void 0
					? void 0
					: _a.length) !== null && _b !== void 0
				? _b
				: 0) > 0;
		if (!doesMatch)
			throw new TypeError(
				'"'
					.concat(
						name,
						'" must match the provided object. "matcher" returned an empty array when called with "'
					)
					.concat(str, '".')
			);
	}
}
module.exports = assertMatch;
