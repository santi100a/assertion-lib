'use strict';
function assertInstanceOf(arg, clas, name) {
	if (name === void 0) {
		name = 'arg';
	}
	try {
		new clas();
	} catch (_) {
		throw new TypeError(
			'"clas" must be a valid constructor. Got '
				.concat(clas, ' of type ')
				.concat(typeof clas, '.')
		);
	}
	if (!(arg instanceof clas))
		throw new TypeError(
			''
				.concat(name, ' must be an instance of ')
				.concat(clas.name, '. Got ')
				.concat(arg, ' of type ')
				.concat(typeof arg, '.')
		);
}
assertInstanceOf.assertInstanceOf = assertInstanceOf;
module.exports = assertInstanceOf;
