import { type Type } from './core';
/**
 * Checks if a given value's type matches any of the specified types.
 * @param value The value to be checked against the specified types.
 * @param types The types to be checked against the value's type.
 * @param name The name of the value (default is 'value').
 * @throws A {@link TypeError} if any of the provided types is invalid or if the type of the value
 * is not in the list.
 */
declare function assertOneOfTypes<T = unknown>(value: T, types: Type[], name?: string): void;
export = assertOneOfTypes;
