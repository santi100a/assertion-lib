import { Type, TYPES } from './core';
import assertEqual = require('./equal');
import assertOneOf = require('./one-of');

/**
 * Checks if the types of elements in an array match the specified types.
 * If any element has a different type, a TypeError is thrown.
 *
 * @param values An array of elements to be checked.
 * @param types An array of strings representing the expected types of elements in the array.
 *
 * @throws A `TypeError` if the types of elements in the array do not match the specified types.
 * @throws A `TypeError` if the length of the "types" array is different from the length of the
 * "values" array.
 * @since 2.0.3
 */
function assertArrayTypes<T = unknown>(values: T[], types: Type[]): void;
/**
 * Checks if the types of elements in an array match the specified types.
 * If any element has a different type, a TypeError is thrown.
 *
 * @param array An array of elements to be checked.
 * @param types An array of strings representing the expected types of elements in the array.
 * @param name A string representing the name of the "values" array.
 *
 * @throws A `TypeError` if the types of elements in the array do not match the specified types.
 * @throws A `TypeError` if the length of the "types" array is different from the length of the
 * "values" array.
 * @since 2.0.3
 */
function assertArrayTypes<T = unknown>(
	values: T[],
	types: Type[],
	name: string
): void;

function assertArrayTypes<T = unknown>(
	values: T[],
	types: Type[],
	name = 'values'
) {
	assertEqual(values.length, types.length, 'values.length', 'types.length');
	for (let c = 0; c < types.length; c++) {
		const type = types[c];
		const value = values[c];
		const typeOfItem = typeof value;
		assertOneOf(type, 'types', TYPES);
		if (type !== typeOfItem)
			throw new TypeError(
				`${name}[${c}] was expected to be of type "${type}". Got "${value}" of type "${typeof value}".`
			);
	}
}

export = assertArrayTypes;
