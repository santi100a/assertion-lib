describe('assertMax', () => {
	const { assertMax } = require('../cjs/max');
	test('"assertMax" is a valid function', () => {
		expect(assertMax).toBeInstanceOf(Function);
	});
	test(`"assertMax" doesn't throw an error if the type is correct`, () => {
		expect(() => assertMax(50, 'num', 100)).not.toThrow();
	});
	test('"assertMax" throws an error if the type is incorrect', () => {
		expect(() => assertMax(30, 'num', 15)).toThrow(RangeError);
	});
	test('code is split correctly', () => {
		expect(assertMax).toBe(require('..').assertMax);
	});
});
