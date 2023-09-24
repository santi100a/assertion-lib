describe('assertExclusiveMax_function', () => {
	const { assertExclusiveMax } = require('../cjs/exclusive-max');
	it('split_correctly', () => {
		expect(assertExclusiveMax).toBe(require('..').assertExclusiveMax);
	});
	// Tests that the function works correctly when arg is smaller than max.
	it('test_arg_smaller_than_max', () => {
		expect(() => assertExclusiveMax(5, 10, 'test')).not.toThrow();
	});

	// Tests that the function works correctly when arg or max is null or undefined.
	it('test_null_or_undefined', () => {
		expect(() => assertExclusiveMax(null, 10, 'test')).not.toThrow(TypeError);
		expect(() => assertExclusiveMax(undefined, 10, 'test')).not.toThrow(
			TypeError
		);
		expect(() => assertExclusiveMax(5, null, 'test')).toThrow(RangeError);
		expect(() => assertExclusiveMax(5, undefined, 'test')).not.toThrow(
			TypeError
		);
	});

	// Tests that the function throws a TypeError with the correct message when arg or max is a negative number or a non-numeric value.
	it('test_negative_or_non_numeric', () => {
		expect(() => assertExclusiveMax(-5, 10, 'test')).not.toThrow(TypeError);
		expect(() => assertExclusiveMax('not a number', 10, 'test')).not.toThrow(
			TypeError
		);
		expect(() => assertExclusiveMax(5, -10, 'test')).toThrow(/"test" must be smaller than -10\./);
		expect(() => assertExclusiveMax(5, 'not a number', 'test')).not.toThrow(
			TypeError
		);
	});

	// Tests that the function throws a TypeError with the correct message when arg is equal to max.
	it('test_arg_equal_to_max', () => {
		expect(() => assertExclusiveMax(5, 5, 'test')).toThrow(/"test" must be smaller than 5\./);
		expect(() => assertExclusiveMax('test', 'test', 'test')).toThrow(/"test" must be smaller/);
		expect(() => assertExclusiveMax(true, true, 'test')).toThrow(/"test" must be smaller/);
		expect(() => assertExclusiveMax(null, null, 'test')).toThrow(/"test" must be smaller than null\./);
	});

	// Tests that the function works correctly when arg and max are of different types.
	it('test_different_types', () => {
		expect(() => assertExclusiveMax(5, '10', 'test')).not.toThrow(TypeError);
		expect(() => assertExclusiveMax('test', 10, 'test')).not.toThrow(TypeError);
		expect(() => assertExclusiveMax(true, 1, 'test')).toThrow(/"test" must be smaller than 1\./);
		expect(() => assertExclusiveMax(null, 0, 'test')).toThrow(/"test" must be smaller than 0\./);
	});

	// Tests that the function works correctly when name parameter is not provided.
	it('test_name_not_provided', () => {
		expect(() => assertExclusiveMax(5, 10)).not.toThrow(TypeError);
		expect(() => assertExclusiveMax('test', 10)).not.toThrow(TypeError);
		expect(() => assertExclusiveMax(true, 1)).toThrow(/"arg" must be smaller than 1\./);
		expect(() => assertExclusiveMax(null, 0)).toThrow(/"arg" must be smaller than 0\./);
	});
});
