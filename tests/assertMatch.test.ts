import assertMatch = require('../cjs/match');

describe('assertMatch_function', () => {
	// Tests that a string matches a regular expression
	it('test_regex_match', () => {
		expect(() => {
			assertMatch('hello', /hello/);
		}).not.toThrow();
	});

	// Tests that a string matches a Matchable object
	it('test_matchable_match', () => {
		const matchable = {
			[Symbol.match](str: string) {
				return ''.concat(str).match(/hello/);
			}
		};
		expect(() => {
			assertMatch('hello', matchable);
		}).not.toThrow();
	});
	it('code_splitting', () => {
		expect(assertMatch).toBe(require('..').assertMatch);
	});

	// Tests that a non-matching string throws an error for a regular expression
	it('test_non_matching_string_regex_match', () => {
		expect(() => {
			assertMatch('world', /hello/);
		}).toThrow(TypeError);
	});

	// Tests that a non-matching string throws an error for a Matchable object
	it('test_non_matching_string_matchable_match', () => {
		const matchable = {
			[Symbol.match](str: string) {
				return ''.concat(str).match(/hello/);
			}
		};
		expect(() => {
			assertMatch('world', matchable);
		}).toThrow(TypeError);
	});
});
