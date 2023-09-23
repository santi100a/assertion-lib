describe('assertInteger', () => {
	const { assertInteger } = require('../cjs/integer');
	test('"assertInteger" is a valid function', () => {
		expect(assertInteger).toBeInstanceOf(Function);
	});
	test(`"assertInteger" doesn't throw an error if the first argument is an int`, () => {
		expect(() => assertInteger(54, 'num')).not.toThrow();
	});
	test('"assertInteger" throws an error if the first argument is a float', () => {
		expect(() => assertInteger(Math.PI, 'Math.PI')).toThrow(TypeError);
	});
});
