import assert = require('../cjs/assert');

describe('assert', () => {
	test('"assert" is a valid function', () => {
		expect(assert).toBeInstanceOf(Function);
	});
	test(`"assert" doesn't throw an error if the predicate is "true"`, () => {
		expect(() => assert(true)).not.toThrow();
	});
	test('"assert" throws an error if the predicate is "false"', () => {
		expect(() => assert(false)).toThrow();
	});
});
