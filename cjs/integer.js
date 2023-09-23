'use strict';
function assertInteger(arg, name) {
	if (name === void 0) {
		name = 'arg';
	}
	function __isInteger(n) {
		return n - Math.floor(n) <= 0;
	}
	if (!__isInteger(arg))
		throw new TypeError(
			'"'
				.concat(name, '" must be an integer. Got "')
				.concat(arg, '" of type "')
				.concat(typeof arg, '".')
		);
}
assertInteger.assertInteger = assertInteger;
module.exports = assertInteger;
