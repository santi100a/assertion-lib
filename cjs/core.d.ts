export type Type =
	| 'string'
	| 'number'
	| 'bigint'
	| 'boolean'
	| 'symbol'
	| 'undefined'
	| 'object'
	| 'function';
export declare const TYPES: Type[];
export declare class AssertionError<E = unknown, A = unknown>
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
	constructor(expected: E, actual: A, operator?: string);
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
