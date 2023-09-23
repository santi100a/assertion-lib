describe('assertArray', () => {
	const { assertArray } = require('../cjs/array');
	test(`"assertArray" doesn't throw an error if the argument is an array`, () => {
		expect(() => assertArray([], 'array')).not.toThrow(TypeError);
	});
	test(`"assertArray" throws an error if the argument isn't an array`, () => {
		expect(() => assertArray(30, 'array')).toThrow(TypeError);
		expect(() => assertArray('string', 'array')).toThrow(TypeError);
		expect(() => assertArray(false, 'array')).toThrow(TypeError);
		expect(() => assertArray({}, 'array')).toThrow(TypeError);
		expect(() => assertArray(new Date(), 'array')).toThrow(TypeError);
		expect(() => assertArray(/regex/, 'array')).toThrow(TypeError);
		expect(() => assertArray(() => void 0, 'array')).toThrow(TypeError);
	});
	test('correctly split', () => {
		expect(assertArray).toBe(require('..').assertArray);
	});
});
