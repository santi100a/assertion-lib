// Generated by CodiumAI
import assertDifferent = require('../cjs/different');

describe('assertDifferent', () => {
	// Asserts that two equal values of the same type throw an error.
	it('should throw an error when comparing two equal values of the same type', () => {
		expect(() => {
			assertDifferent(1, 1);
		}).toThrow(
			/"a" must NOT be equal to "b". Got "1" \(of type "number"\) and "1" \(of type "number"\)\./
		);
	});

	// Asserts that two equal values of different types don't throw an error.
	it('should not throw an error when comparing two equal values of different types', () => {
		expect(() => {
			assertDifferent(1, '1');
		}).not.toThrow();
	});

	// Asserts that two equal values with custom names throw an error.
	it('should throw an error when comparing two equal values with custom names', () => {
		expect(() => {
			assertDifferent(1, 1, 'value1', 'value2');
		}).toThrow(
			/"value1" must NOT be equal to "value2". Got "1" \(of type "number"\) and "1" \(of type "number"\)\./
		);
	});

	// Asserts that two different values of the same type throw a TypeError.
	it('should throw a TypeError when comparing two different values of the same type', () => {
		expect(() => {
			assertDifferent(1, 2);
		}).not.toThrow();
	});

	// Asserts that two different values of different types do not throw.
	it('should not throw a TypeError when comparing two different values of different types', () => {
		expect(() => {
			assertDifferent(1, '2');
		}).not.toThrow();
	});

	// Asserts that two different values with custom names do not throw.
	it('should not throw when comparing two different values with custom names', () => {
		expect(() => {
			assertDifferent(1, 2, 'value1', 'value2');
		}).not.toThrow();
	});
});
