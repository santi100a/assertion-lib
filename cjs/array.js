'use strict';
function assertArray(arg, name) {
	if (name === void 0) {
		name = 'arg';
	}
	if (!(arg instanceof Array))
		throw new TypeError(
			'"'
				.concat(name, '" must be an Array. Got "')
				.concat(arg, '" of type "')
				.concat(typeof arg, '".')
		);
}
assertArray.assertArray = assertArray;
module.exports = assertArray;
