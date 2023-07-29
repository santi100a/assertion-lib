export type Type =
	| 'string'
	| 'number'
	| 'bigint'
	| 'boolean'
	| 'symbol'
	| 'undefined'
	| 'object'
	| 'function';
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
