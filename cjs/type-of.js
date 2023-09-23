'use strict';
var one_of_1 = require('./one-of');
var core_1 = require('./core');
/** Implementation */
function assertTypeOf(arg, expectedType, name) {
	if (name === void 0) {
		name = 'arg';
	}
	(0, one_of_1.assertOneOf)(expectedType, 'expectedType', core_1.TYPES);
	if (typeof arg !== expectedType)
		throw new TypeError(
			'"'
				.concat(name, '" must be of type "')
				.concat(expectedType, '". Got "')
				.concat(arg, '" of type "')
				.concat(typeof arg, '".')
		);
}
assertTypeOf.assertTypeOf = assertTypeOf;
module.exports = assertTypeOf;
