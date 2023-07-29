import { AssertionError, AssertOptionalParams } from './core';

/**
 * Asserts that `condition` is truthy.
 * Throws an {@link AssertionError} otherwise.
 *
 * @param condition A boolean condition to assert.
 * @param errorParams Parameters for the {@link AssertionError} that will be thrown in case the condition is falsy.
 */
function assert(
	condition: boolean,
	errorParams: AssertOptionalParams<true, boolean>
): void;
function assert(
	condition: boolean,
	errorParams: AssertOptionalParams<true, boolean> = {
		expected: true,
		actual: false,
		operator: '==='
	}
): void {
	const { expected, actual, operator } = errorParams;
	if (!condition) throw new AssertionError(expected, actual, operator);
}
assert.assert = assert;
export = assert;
