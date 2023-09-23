import { Type } from './core';
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
declare function assertArrayTypes<T = unknown>(values: T[], types: Type[]): void;
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
declare function assertArrayTypes<T = unknown>(values: T[], types: Type[], name: string): void;
export = assertArrayTypes;
