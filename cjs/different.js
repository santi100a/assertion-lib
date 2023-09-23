'use strict';
var assertTypeOf = require('./type-of');
function assertDifferent(
	a,
	b,
	name1,
	name2,
	// @ts-expect-error: The types might overlap at runtime.
	comparator
) {
	if (name1 === void 0) {
		name1 = 'a';
	}
	if (name2 === void 0) {
		name2 = 'b';
	}
	if (comparator === void 0) {
		comparator = function (a, b) {
			return a === b;
		};
	}
	assertTypeOf(name1, 'string', 'name1');
	assertTypeOf(name2, 'string', 'name2');
	assertTypeOf(comparator, 'function', 'comparator');
	if (comparator(a, b))
		throw new TypeError(
			'"'
				.concat(name1, '" must NOT be equal to "')
				.concat(name2, '". Got "')
				.concat(a, '" (of type "')
				.concat(typeof a, '") and "')
				.concat(b, '" (of type "')
				.concat(typeof b, '").')
		);
}
module.exports = assertDifferent;
