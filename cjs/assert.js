'use strict';
var core_1 = require('./core');
function assert(condition, errorParams) {
	if (errorParams === void 0) {
		errorParams = {
			expected: true,
			actual: false,
			operator: '==='
		};
	}
	var expected = errorParams.expected,
		actual = errorParams.actual,
		operator = errorParams.operator;
	if (!condition) throw new core_1.AssertionError(expected, actual, operator);
}
assert.assert = assert;
module.exports = assert;
