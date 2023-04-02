describe('assertion-lib test suites', () => {
	const {
		assert,
		assertType,
		assertTypeOf,
		assertInteger,
		assertMax,
		assertMin,
		assertOneOf,
		assertRange,
		assertArray
	} = require('..');

	describe('assert', () => {
		test('"assert" is a valid function', () => {
			expect(assert).toBeInstanceOf(Function);
		});
		test(`"assert" doesn't throw an error if the predicate is "true"`, () => {
			expect(() => assert(true)).not.toThrow();
		});
		test('"assert" throws an error if the predicate is "false"', () => {
			expect(() => assert(false)).toThrowError();
		});
	});
	describe('assertType', () => {
		test('"assertType" is a valid function', () => {
			expect(assertType).toBeInstanceOf(Function);
		});
		test(`"assert" doesn't throw an error if the type is correct`, () => {
			expect(() => assertType(true, 'boolean')).not.toThrow();
		});
		test('"assertType" throws an error if the type is incorrect', () => {
			expect(() => assertType({}, 'number')).toThrowError();
		});
	});
	describe('assertTypeOf', () => {
		test('"assertTypeOf" is a valid function', () => {
			expect(assertTypeOf).toBeInstanceOf(Function);
		});
		test(`"assertTypeOf" doesn't throw an error if the type is correct`, () => {
			expect(() => assertTypeOf(true, 'boolean', 'bool')).not.toThrow();
		});
		test('"assertTypeOf" throws an error if the type is incorrect', () => {
			expect(() => assertTypeOf(false, 'object', 'bool')).toThrow(TypeError);
		});
	});
	describe('assertInteger', () => {
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
	describe('assertMax', () => {
		test('"assertMax" is a valid function', () => {
			expect(assertMax).toBeInstanceOf(Function);
		});
		test(`"assertMax" doesn't throw an error if the type is correct`, () => {
			expect(() => assertMax(50, 'num', 100)).not.toThrow();
		});
		test('"assertMax" throws an error if the type is incorrect', () => {
			expect(() => assertMax(30, 'num', 15)).toThrow(RangeError);
		});
	});
	describe('assertMin', () => {
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
	});
	describe('assertRange', () => {
		test('"assertRange" is a valid function', () => {
			expect(assertRange).toBeInstanceOf(Function);
		});
		test(`"assertRange" doesn't throw an error if the argument fits the range`, () => {
			expect(assertRange(30, 'num', 15, 33));
		});
		test(`"assertRange" throws an error if the argument is smaller than the lower limit`, () => {
			expect(() => assertRange(45, 'num', 50, 100)).toThrow(RangeError);
		});
		test(`"assertRange" throws an error if the argument is bigger than the upper limit`, () => {
			expect(() => assertRange(450, 'num', 50, 100)).toThrow(RangeError);
		});
	});
	describe('assertOneOf', () => {
		test('"assertOneOf" is a valid function', () => {
			expect(assertOneOf).toBeInstanceOf(Function);
		});
		test(`"assertOneOf" doesn't throw an error if the argument is in the list`, () => {
			expect(assertOneOf(30, 'num', [50, 20, 30]));
			expect(
				assertOneOf('hello world', 'str', [
					'everything',
					'oh shucks',
					'hello world'
				])
			);
			expect(assertOneOf(true, 'num', [false, true]));
		});
		test(`"assertOneOf" throws an error if the argument is not in the list`, () => {
			expect(() => assertOneOf(45, 'num', [50, 100])).toThrow(TypeError);
		});
	});
	describe('assertArray', () => {
		test(`"assertArray" doesn't throw an error if the argument is an array`, () => {
			expect(assertArray([], 'array'));
		});
		test(`"assertArray" throws an error if the argument isn't an array`, () => {
			expect(() => assertArray(30, 'array')).toThrow(TypeError);
			expect(() => assertArray('string', 'array')).toThrow(TypeError);
			expect(() => assertArray(false, 'array')).toThrow(TypeError);
			expect(() => assertArray({}, 'array')).toThrow(TypeError);
			expect(() => assertArray(new Date, 'array')).toThrow(TypeError);
			expect(() => assertArray(/regex/, 'array')).toThrow(TypeError);
			expect(() => assertArray(() => {}, 'array')).toThrow(TypeError);
		});
	});
});