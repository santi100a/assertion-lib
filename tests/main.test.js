const { assert, assertType } = require('../cjs/index.js');

describe('assertion-lib tests', () => {
	test("assert doesn't throw an error if the condition is true", () => {
		assert(true);
		expect(() => assert(false)).toThrowError();

	});
	test("assertType doesn't throw an error if the condition is true", () => {
		assertType(true, 'boolean');
		expect(() => assertType(false, 'number')).toThrowError();
	});
});
