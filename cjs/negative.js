'use strict';
var type_of_1 = require('./type-of');
function assertNegative(num, name) {
	if (name === void 0) {
		name = 'arg';
	}
	(0, type_of_1.assertTypeOf)(num, 'number', 'val');
	if (num >= 0)
		throw new TypeError(
			'"'
				.concat(name, '" must be negative. Got ')
				.concat(num, ' of type ')
				.concat(typeof num, '.')
		);
}
module.exports = assertNegative;
