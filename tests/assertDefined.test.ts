// Generated by CodiumAI
import assertDefined = require('../cjs/defined');

describe('assertDefined_function', () => {
	// Tests that assertDefined does not throw an error when a non-null element is passed
	it('test_happy_path_non_null', () => {
		expect(() => assertDefined('element')).not.toThrow();
	});

	// Tests that assertDefined does not throw an error when a non-undefined element is passed
	it('test_happy_path_non_undefined', () => {
		expect(() => assertDefined(123)).not.toThrow();
	});
	// Tests that assertDefined throws an error when undefined is passed
	it('test_throw_undefined', () => {
		expect(() => assertDefined(undefined)).toThrow(
			/must be neither null nor undefined\. Got "undefined"/
		);
	});
	// Tests that assertDefined throws an error when null is passed
	it('test_throw_null', () => {
		expect(() => assertDefined(null)).toThrow(
			/must be neither null nor undefined\. Got "null"/
		);
	});
	it('code_splitting', () => {
		expect(assertDefined).toBe(require('..').assertDefined);
	});
});
