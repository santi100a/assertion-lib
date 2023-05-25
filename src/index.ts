import { deepEquality } from '@santi100/equal-lib';

function indexOf(arr: unknown[], item: unknown) {
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
 * @param val An expression whose type is to be asserted.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @deprecated Use {@link assertTypeOf} instead.
 */
export function assertType<T = unknown>(val: T, expectedType: Type): void {
	const wrongType = typeof val !== expectedType;
	if (wrongType) throw new AssertionError(expectedType, typeof val, 'typeof');
}

export type Type =
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
 * @param arg An expression whose type is to be asserted.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 */
export function assertTypeOf(arg: unknown, expectedType: Type, name = 'arg') {
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
	assertOneOf(expectedType, 'expectedType', TYPES);
	if (typeof arg !== expectedType)
		throw new TypeError(
			`"${name}" must be of type "${expectedType}". Got "${arg}" of type "${typeof arg}".`
		);
}
/**
 * Asserts `arg` is one of `choices`.  Throws a `TypeError` otherwise.
 *
 * @param arg The value that's expected to be included within `choices`.
 * @param name An expression name to be put in the `TypeError`'s message.
 * @param choices An array containing the posible values `arg` should have in order for an error not
 * to be thrown.
 * @param shallow Whether or not to use shallow equality (default deep equality is powered by 
   `@santi100/equal-lib` 😉).
 */
export function assertOneOf<T = unknown>(arg: unknown, name: string, choices: T[], shallow = false) {
	if (shallow ? choices.indexOf(arg as T) : indexOf(choices, arg) === -1)
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
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 */
export function assertInteger(arg: number, name = 'arg') {
	if (!__isInteger(arg))
		throw new TypeError(
			`"${name}" must be an integer. Got "${arg}" of type "${typeof arg}".`
		);
}
/**
 * Asserts `arg` is bigger than or equal than `min`. Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `TypeError`'s message.
 * @param min The minimum value for `arg`.
 */
export function assertMin(arg: unknown, name: string, min: unknown) {
	// @ts-expect-error: It's alright to have these be any type.
	if (arg < min)
		throw new RangeError(
			`"${name}" must be bigger than or equal to ${min}. Got "${arg}" of type "${typeof arg}".`
		);
}

/**
 * Asserts `arg` is smaller or equal than `max`. Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `TypeError`'s message.

 * @param max The maximum value for `arg`.
 */
export function assertMax(arg: unknown, name: string, max: unknown) {
	// @ts-expect-error: It's alright to have these be any type.
	if (arg > max)
		throw new RangeError(
			`"${name}" must be smaller than or equal to ${max}. Got "${arg}" of type "${typeof arg}".`
		);
}
/**
 * Asserts `arg` is between `min + 1` and `max + 1` (inclusive). Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `TypeError`'s message. 
 * @param min The minimum value for `arg`.
 * @param max The maximum value for `arg`.
 */
export function assertRange(arg: unknown, name: string, min: unknown, max: unknown) {
	// @ts-expect-error: It's alright to have these be any type. 
	if (arg > max || arg < min)
		throw new RangeError(
			`"${name}" must be smaller than ${max} and bigger than ${min}. Got "${arg}" of type "${typeof arg}".`
		);
}
/**
 * Asserts `arg` is an Array. Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 */
export function assertArray(arg: unknown, name = 'arg') {
	if (!(arg instanceof Array))
		throw new TypeError(
			`"${name}" must be an Array. Got "${arg}" of type "${typeof arg}".`
		);
}
/**
 * Asserts `arg` is an instance of `clas`. Throws a `TypeError` otherwise.
 * 
 * @param arg An object whose class is to be asserted to be `clas`.
 * @param clas Any valid constructor.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
export function assertInstanceOf<T = unknown>(
	arg: unknown,
	clas: new (...args: unknown[]) => T,
	name = 'arg'
) {
	try {
		new clas();
	} catch (_) {
		throw new TypeError(
			`"clas" must be a valid constructor. Got ${clas} of type ${typeof clas}.`
		);
	}
	if (!(arg instanceof clas))
		throw new TypeError(
			`${name} must be an instance of ${
				clas.name
			}. Got ${arg} of type ${typeof arg}.`
		);
}
/**
 * Asserts `arg` is smaller than `max`. Throws a `TypeError` otherwise.
 * 
 * @param arg The value whose value is to be asserted to be smaller than `max`.
 * @param max The maximum value `arg` is allowed to have.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
export function assertExclusiveMax(arg: unknown, max: unknown, name = 'arg') {
	// @ts-expect-error: It's alright to have these be any type.
	if (arg >= max)
		throw new TypeError(
			`"${name}" must be smaller than ${max}. Got ${arg} of type ${typeof arg}.`
		);
}
/**
 * Asserts `arg` is bigger than `min`. Throws a `TypeError` otherwise.
 * 
 * @param arg The value whose value is to be asserted to be bigger than `max`.
 * @param min The minimum value `arg` is allowed to have.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
export function assertExclusiveMin(arg: unknown, min: unknown, name = 'arg') {
	// @ts-expect-error: It's alright to have these be any type.
	if (arg <= min)
		throw new TypeError(
			`"${name}" must be bigger than ${min}. Got ${arg} of type ${typeof arg}.`
		);
}