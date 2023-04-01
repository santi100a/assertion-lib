import { deepEquality } from '@santi100/equal-lib';

function indexOf(arr: any[], item: any) {
	for (const idx in arr) {
		if (deepEquality(arr[idx], item)) return arr[idx];
	}
	return -1;
}

export class AssertionError<E = unknown, A = unknown>
	extends Error
	implements AssertOptionalParams<E, A>
{
	/**
	 * Expected value for the assertion.
	 */
	readonly expected: E;
	/**
	 * Received value for the assertion.
	 */
	readonly actual: A;
	/**
	 * Optional operator used for the assertion.
	 */
	readonly operator?: string;
	constructor(expected: E, actual: A, operator?: string) {
		super(
			`Assertion failed! Expected ${expected}. Got ${actual} when using operator ${operator}.`
		);
		this.expected = expected;
		this.actual = actual;
		this.operator = operator;
	}
}
/**
 * Asserts that `condition` is truthy.
 * Throws an {@link AssertionError} otherwise.
 *
 * @param {boolean} condition A boolean condition to assert.
 * @param {AssertOptionalParams} errorParams Parameters for the {@link AssertionError} that will be
 * thrown in case the condition is falsy.
 * @param {unknown} errorParams.expected Expected value for the assertion.
 * @param {unknown} errorParams.actual   Received value for the assertion.
 * @param {string?} errorParams.operator Optional operator used for the assertion.
 * @returns {void} Nothing.
 */
export function assert(
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
/**
 * Asserts that the type of `val` is `expectedType`.
 * Throws an {@link AssertionError} otherwise.
 *
 * @param {unknown} val An expression to assert its type.
 * @param {string} expectedType The type to assert.
 * @returns {void} Nothing.
 */
export function assertType<T = unknown>(val: T, expectedType: Type): void {
	const wrongType = typeof val !== expectedType;
	if (wrongType) throw new AssertionError(expectedType, typeof val, 'typeof');
}

type Type =
	| 'string'
	| 'number'
	| 'bigint'
	| 'boolean'
	| 'symbol'
	| 'undefined'
	| 'object'
	| 'function';
/**
 * The shape of the assertion options.
 */
export interface AssertOptionalParams<E, A> {
	/**
	 * Expected value for the assertion.
	 */
	readonly expected: E;
	/**
	 * Received value for the assertion.
	 */
	readonly actual: A;
	/**
	 * Optional operator used for the assertion.
	 */
	readonly operator?: string;
}
/**
 * Asserts that the type of `arg` is `expectedType`. Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @param name The name for the expression of `arg`.
 */
export function assertTypeOf(arg: any, expectedType: Type, name: string) {
	const TYPES = [
		'string',
		'number',
		'bigint',
		'boolean',
		'symbol',
		'undefined',
		'object',
		'function'
	];
	if (TYPES.indexOf(expectedType) === -1)
		throw new TypeError(
			`${name} must be one of ${TYPES.join(
				', '
			)}. Got "${arg} of type "${typeof arg}".`
		);
	if (typeof arg !== expectedType)
		throw new TypeError(
			`"${name}" must be of type "${expectedType}". Got "${arg}" of type "${typeof arg}".`
		);
}
/**
 * Asserts `arg` is one of `choices`.  Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name The name for the expression of `arg`.
 * @param choices An array containing the posible values `arg` should have in order for an error not
 * to be thrown.
 */
export function assertOneOf(arg: any, name: string, choices: any[]) {
	if (indexOf(choices, arg) === -1)
		throw new TypeError(
			`"${name}" must be one of "${choices.join(
				', '
			)}". Got "${arg}" of type "${typeof arg}".`
		);
}
function __isInteger(n: number) {
	return n - Math.floor(n) <= 0;
}
/**
 * Asserts `arg` is an integer. Throws a `TypeError` otherwise.
 *
 * @param arg Any number.
 * @param name The name for the expression for `arg`.
 */
export function assertInteger(arg: number, name: string) {
	if (!__isInteger(arg))
		throw new TypeError(
			`"${name}" must be an integer. Got "${arg}" of type "${typeof arg}".`
		);
}
/**
 * Asserts `arg` is bigger or equal than `min`. Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name The name of the expression for `arg`.
 * @param min The minimum value for `arg`.
 */
export function assertMin(arg: any, name: string, min: any) {
	if (arg < min)
		throw new TypeError(
			`"${name}" must be bigger than ${min}. Got "${arg}" of type "${typeof arg}".`
		);
}

/**
 * Asserts `arg` is smaller or equal than `max`. Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name The name of the expression for `arg`.
 * @param max The maximum value for `arg`.
 */
export function assertMax(arg: any, name: string, max: any) {
	if (arg > max)
		throw new TypeError(
			`"${name}" must be smaller than ${max}. Got "${arg}" of type "${typeof arg}".`
		);
}
/**
 * Asserts `arg` is between `min + 1` and `max + 1` (inclusive). Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name The name of the expression for `arg`.
 * @param min The minimum value for `arg`.
 * @param max The maximum value for `arg`.
 */
export function assertRange(arg: any, name: string, min: any, max: any) {
	if (arg > max || arg < min)
		throw new TypeError(
			`"${name}" must be smaller than ${max} and bigger than ${min}. Got "${arg}" of type "${typeof arg}".`
		);
}
