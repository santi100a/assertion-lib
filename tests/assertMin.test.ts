describe('assertMin', () => {
	const { assertMin } = require('../cjs/min');
	test('"assertMin" is a valid function', () => {
		expect(assertMin).toBeInstanceOf(Function);
	});
	test(`"assertMin" doesn't throw an error if the argument is big enough`, () => {
		expect(() => assertMin(50, 'num', 20)).not.toThrow();
		expect(() => assertMin(20, 'num', 20)).not.toThrow();
	});
	test('"assertMin" throws an error if the argument is too small', () => {
		expect(() => assertMin(20, 'num', 50)).toThrow(RangeError);
		expect(() => assertMin(30, 'num', 50)).toThrow(RangeError);
		expect(() => assertMin(40, 'num', 50)).toThrow(RangeError);
		expect(() => assertMin(45, 'num', 50)).toThrow(RangeError);
		expect(() => assertMin(49, 'num', 50)).toThrow(RangeError);
	});
	test('code is correctly split', () => {
		expect(assertMin).toBe(require('..').assertMin);
	});
});
