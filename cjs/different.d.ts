/**
 * Compares two values and throws an error if they are equal.
 *
 * @template T The type of the first value being compared.
 * @template U The type of the second value being compared.
 * @param {T} a The first value to compare.
 * @param {U} b The second value to compare.
 * @throws A `TypeError` if the values `a` and `b` are equal.
 */
declare function assertDifferent<T = unknown, U = unknown>(a: T, b: U): void;
/**
 * Compares two values and throws an error if they are equal.
 *
 * @template T The type of the first value being compared.
 * @template U The type of the second value being compared.
 * @param {T} a The first value to compare.
 * @param {U} b The second value to compare.
 * @param {string} [name1='a'] The name of the first value being compared.
 * @throws A `TypeError` if the values `a` and `b` are equal.
 */
declare function assertDifferent<T = unknown, U = unknown>(
	a: T,
	b: U,
	name1: string
): void;
/**
 * Compares two values and throws an error if they are equal.
 *
 * @template T The type of the first value being compared.
 * @template U The type of the second value being compared.
 * @param {T} a The first value to compare.
 * @param {U} b The second value to compare.
 * @param {string} [name1='a'] The name of the first value being compared.
 * @param {string} [name2='b'] The name of the second value being compared.
 * @throws A `TypeError` if the values `a` and `b` are equal.
 */
declare function assertDifferent<T = unknown, U = unknown>(
	a: T,
	b: U,
	name1: string,
	name2: string
): void;
/**
 * Compares two values and throws an error if they are equal.
 *
 * @template T The type of the first value being compared.
 * @template U The type of the second value being compared.
 * @param {T} a The first value to compare.
 * @param {U} b The second value to compare.
 * @param {string} [name1='a'] The name of the first value being compared.
 * @param {string} [name2='b'] The name of the second value being compared.
 * @param {(a: T, b: U) => boolean} [comparator=(a, b) => a === b] A custom comparator function that takes two arguments and returns a boolean indicating whether they are equal.
 * @throws A `TypeError` if the values `a` and `b` are equal.
 */
declare function assertDifferent<T = unknown, U = unknown>(
	a: T,
	b: U,
	name1: string,
	name2: string,
	comparator: (a: T, b: U) => boolean
): void;
export = assertDifferent;
