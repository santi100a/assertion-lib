describe('assertInstanceOf_function', () => {
	const { assertInstanceOf } = require('../cjs/instance-of');
	// Tests that assertInstanceOf correctly identifies when arg is an instance of clas.
	it('test_happy_path', () => {
		class TestClass {
			method() {
				// nothing :)
			}
		}
		const testInstance = new TestClass();
		expect(() =>
			assertInstanceOf(testInstance, TestClass, 'testInstance')
		).not.toThrow();
	});

	// Tests that assertInstanceOf throws a TypeError when arg is not an instance of clas.
	it('test_edge_case', () => {
		class TestClass {
			// whatever, I am a dummy class
			method() {
				// nothing :)
			}
		}
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
	test('correctly split', () => {
		expect(assertInstanceOf).toBe(require('..').assertInstanceOf);
	});
});
