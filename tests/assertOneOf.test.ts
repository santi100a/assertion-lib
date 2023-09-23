import assertOneOf = require('../cjs/one-of');
describe('assertOneOf', () => {
	test('"assertOneOf" is a valid function', () => {
		expect(assertOneOf).toBeInstanceOf(Function);
	});
	test(`"assertOneOf" doesn't throw an error if the argument is in the list`, () => {
		expect(() => assertOneOf(30, 'num', [50, 20, 30])).not.toThrow(TypeError);
		expect(() =>
			assertOneOf('hello world', 'str', [
				'everything',
				'oh shucks',
				'hello world'
			])
		).not.toThrow(TypeError);
		expect(() => assertOneOf(true, 'bool', [false, true])).not.toThrow(
			TypeError
		);
	});
	test(`"assertOneOf" throws an error if the argument isn't in the list`, () => {
		expect(() => assertOneOf(45, 'num', [50, 100])).toThrow(TypeError);
	});
	test('"assertOneOf" throws an error if you try to use the obsolete "shallow" argument', () => {
		expect(() =>
			assertOneOf(
				45,
				'num',
				[50, 100],
				// @ts-expect-error: Required to test handling of retired usage.
				false
			)
		).toThrow(/"shallow" argument is no longer valid\./);
	});
	test('"assertOneOf" throws an error if you specify a non-function as "comparator"', () => {
		expect(() =>
			assertOneOf(
				45,
				'num',
				[50, 100],
				// @ts-expect-error: Required to test runtime type-checking.
				'not a function'
			)
		).toThrow(/"comparator" must be of type "function"/);
	});
});
