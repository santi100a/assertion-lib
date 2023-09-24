import assertPositive = require('../cjs/positive');
describe('assertPositive_function', () => {

	// Tests that assertPositive does not throw when num is zero
	it('test_positive_zero', () => {
		expect(() => assertPositive(0)).not.toThrow();
	});

	// Tests that assertPositive does not throw when num is positive
	it('test_positive_positive', () => {
		expect(() => assertPositive(5)).not.toThrow();
	});

	// Tests that assertPositive throws a TypeError when num is negative
	it('test_positive_negative', () => {
		expect(() => assertPositive(-5)).toThrow(/"num" must be positive/);
	});

	// Tests that assertPositive throws a TypeError when num is a string
	it('test_positive_string', () => {
		// @ts-expect-error: Runtime type-checking test
		expect(() => assertPositive('5')).toThrow(TypeError);
	});

	// Tests that assertPositive throws a TypeError when num is an object
	it('test_positive_object', () => {
		// @ts-expect-error: Runtime type-checking test
		expect(() => assertPositive({})).toThrow(TypeError);
	});

	// Tests that assertPositive throws a TypeError when num is a boolean
	it('test_positive_boolean', () => {
		// @ts-expect-error: Runtime type-checking test
		expect(() => assertPositive(true)).toThrow(TypeError);
	});
});
