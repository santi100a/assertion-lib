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
		assertArray,
		assertInstanceOf,
		assertExclusiveMax,
		assertExclusiveMin
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
			expect(() => assertArray(new Date(), 'array')).toThrow(TypeError);
			expect(() => assertArray(/regex/, 'array')).toThrow(TypeError);
			expect(() => assertArray(() => {}, 'array')).toThrow(TypeError);
		});
	});
	describe('assertInstanceOf_function', () => {
		// Tests that assertInstanceOf correctly identifies when arg is an instance of clas.
		it('test_happy_path', () => {
			class TestClass {}
			const testInstance = new TestClass();
			expect(() =>
				assertInstanceOf(testInstance, TestClass, 'testInstance')
			).not.toThrow();
		});

		// Tests that assertInstanceOf throws a TypeError when arg is not an instance of clas.
		it('test_edge_case', () => {
			class TestClass {}
			const testInstance = {};
			expect(() =>
				assertInstanceOf(testInstance, TestClass, 'testInstance')
			).toThrow(TypeError);
		});

		// Tests that assertInstanceOf throws a TypeError when clas is not a valid constructor.
		it('test_edge_case_2', () => {
			const invalidClass = 'not a valid constructor';
			const testInstance = {};
			expect(() =>
				assertInstanceOf(testInstance, invalidClass, 'testInstance')
			).toThrow(TypeError);
		});
	});

	describe('assertExclusiveMax_function', () => {
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
			expect(() => assertExclusiveMax(5, null, 'test')).toThrow(TypeError);
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
			expect(() => assertExclusiveMax(5, -10, 'test')).toThrow(TypeError);
			expect(() => assertExclusiveMax(5, 'not a number', 'test')).not.toThrow(
				TypeError
			);
		});

		// Tests that the function throws a TypeError with the correct message when arg is equal to max.
		it('test_arg_equal_to_max', () => {
			expect(() => assertExclusiveMax(5, 5, 'test')).toThrow(TypeError);
			expect(() => assertExclusiveMax('test', 'test', 'test')).toThrow(
				TypeError
			);
			expect(() => assertExclusiveMax(true, true, 'test')).toThrow(TypeError);
			expect(() => assertExclusiveMax(null, null, 'test')).toThrow(TypeError);
		});

		// Tests that the function works correctly when arg and max are of different types.
		it('test_different_types', () => {
			expect(() => assertExclusiveMax(5, '10', 'test')).not.toThrow(TypeError);
			expect(() => assertExclusiveMax('test', 10, 'test')).not.toThrow(
				TypeError
			);
			expect(() => assertExclusiveMax(true, 1, 'test')).toThrow(TypeError);
			expect(() => assertExclusiveMax(null, 0, 'test')).toThrow(TypeError);
		});

		// Tests that the function works correctly when name parameter is not provided.
		it('test_name_not_provided', () => {
			expect(() => assertExclusiveMax(5, 10)).not.toThrow(TypeError);
			expect(() => assertExclusiveMax('test', 10)).not.toThrow(TypeError);
			expect(() => assertExclusiveMax(true, 1)).toThrow(TypeError);
			expect(() => assertExclusiveMax(null, 0)).toThrow(TypeError);
		});
	});
	describe('assertExclusiveMin_function', () => {
	
		// Tests that the function works correctly when arg is greater than min. 
		it("test_arg_greater_than_min", () => {
			expect(() => assertExclusiveMin(5, 3)).not.toThrow();
		});
	
		// Tests that the function works correctly when arg is a string that can be converted to a number. 
		it("test_arg_string_to_number", () => {
			expect(() => assertExclusiveMin("5", 3)).not.toThrow();
		});
	
		// Tests that the function throws a TypeError with the correct message when arg is not greater than min. 
		it("test_arg_type_error", () => {
			expect(() => assertExclusiveMin(3, 3)).toThrow(TypeError);
			expect(() => assertExclusiveMin(3, 3)).toThrow(`"arg" must be bigger than 3. Got 3 of type number.`);
		});
	
		// Tests that the function throws a TypeError with the correct message when arg is equal to min.  
		it("test_arg_equal_to_min", () => {
			expect(() => assertExclusiveMin(5, 5)).toThrow(TypeError);
			expect(() => assertExclusiveMin(5, 5)).toThrow(`"arg" must be bigger than 5. Got 5 of type number.`);
		});
	
		// Tests that the function throws a TypeError with the correct message when arg is undefined.  
		it("test_arg_undefined", () => {
			expect(() => assertExclusiveMin(undefined, 5))
			expect(() => assertExclusiveMin(undefined, 5))
		});
	});
});
