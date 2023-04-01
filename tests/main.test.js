describe('assertion-lib test suites', () => {
	const {
		assert,
		assertType,
		assertTypeOf,
		assertInteger,
		assertMax,
		assertMin,
		assertOneOf,
		assertRange
	} = require('..');

	describe('assert', () => {
		test('"assert" is a valid function', () => {
			expect(assert).toBeInstanceOf(Function);
		});
		test(`"assert" doesn't throw an error if the predicate is "true"`, () => {
			expect(assert(true)).toBe(undefined);
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
			expect(assertType(true, 'boolean')).toBe(undefined);
		});
		test('"assertType" throws an error if the type is correct', () => {
			expect(() => assertType({}, 'number')).toThrowError();
		});
	});
	describe('assertTypeOf', () => {
		test('"assertTypeOf" is a valid function', () => {
			expect(assertTypeOf).toBeInstanceOf(Function);
		});
		test(`"assertTypeOf" doesn't throw an error if the type is correct`, () => {
			expect(assertTypeOf(true, 'boolean', 'bool')).toBe(undefined);
		});
		test('"assertTypeOf" throws an error if the type is incorrect', () => {
			expect(() => assertTypeOf(false, 'object', 'bool')).toThrowError();
		});
	});
	describe('assertInteger', () => {
		test('"assertInteger" is a valid function', () => {
			expect(assertInteger).toBeInstanceOf(Function);
		});
		test(`"assertInteger" doesn't throw an error if the first argument is an int`, () => {
			expect(assertInteger(54, 'num')).toBe(undefined);
		});
		test('"assertInteger" throws an error if the first argument is a float', () => {
			expect(() => assertInteger(Math.PI, 'Math.PI')).toThrowError();
		});
	});
	describe('assertMax', () => {
		test('"assertMax" is a valid function', () => {
			expect(assertMax).toBeInstanceOf(Function);
		});
		test(`"assertMax" doesn't throw an error if the type is correct`, () => {
			expect(assertMax(50, 'num', 100)).toBe(undefined);
		});
		test('"assertMax" throws an error if the type is incorrect', () => {
			expect(() => assertMax(30, 'num', 15)).toThrowError();
		});
	});
	describe('assertMin', () => {
		test('"assertMin" is a valid function', () => {
			expect(assertMin).toBeInstanceOf(Function);
		});
		test(`"assertMin" doesn't throw an error if the type is correct`, () => {
			expect(assertMin(50, 'num', 20)).toBe(undefined);
		});
		test('"assertMin" throws an error if the type is incorrect', () => {
			expect(() => assertMin(20, 'num', 50)).toThrowError();
		});
	});
	describe('assertRange', () => {
		test('"assertRange" is a valid function', () => {
			expect(assertRange).toBeInstanceOf(Function);
		});
		test(`"assertRange" doesn't throw an error if the argument fits the range`, () => {
			expect(assertRange(30, 'num', 15, 33)).toBe(undefined);
		});
		test(`"assertRange" throws an error if the argument is smaller than the lower limit`, () => {
			expect(() => assertRange(45, 'num', 50, 100)).toThrowError();
		});
		test(`"assertRange" throws an error if the argument is bigger than the upper limit`, () => {
			expect(() => assertRange(450, 'num', 50, 100)).toThrowError();
		});
	});
	describe('assertOneOf', () => {
		test('"assertOneOf" is a valid function', () => {
			expect(assertOneOf).toBeInstanceOf(Function);
		});
		test(`"assertOneOf" doesn't throw an error if the argument is in the list`, () => {
			expect(assertOneOf(30, 'num', [50, 20, 30])).toBe(undefined);
			expect(
				assertOneOf('hello world', 'num', [
					'everything',
					'oh shucks',
					'hello world'
				])
			).toBe(undefined);
			expect(assertOneOf(true, 'num', [false, true])).toBe(undefined);
		});
		test(`"assertOneOf" throws an error if the argument is not in the list`, () => {
			expect(() => assertOneOf(45, 'num', [50, 100])).toThrowError();
		});
	});
});
