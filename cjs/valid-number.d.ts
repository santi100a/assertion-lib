/**
 * Checks if a given number is valid. Throws an error if the number is NaN.
 *
 * @param num The number to be validated.
 * @throws A TypeError if the number is NaN.
 * @example
 *
 * assertValidNumber(5); // No error is thrown
 * assertValidNumber(NaN); // Throws a TypeError with the message '"num" must not be NaN. Got NaN.'
 */
declare function assertValidNumber(num: number): void;
/**
 * Checks if a given number is valid (i.e. not NaN). Throws an error if the number is NaN.
 *
 * @param num The number to be validated.
 * @param name The name of the number being validated. Defaults to 'num'.
 * @throws A TypeError if the number is NaN.
 * @example
 *
 * assertValidNumber(5); // No error is thrown
 * assertValidNumber(NaN); // Throws a TypeError with the message '"num" must not be NaN. Got NaN.'
 * assertValidNumber(NaN, 'myNum'); // Throws a TypeError with the message '"myNum" must not be NaN. Got NaN.'
 */
declare function assertValidNumber(num: number, name: string): void;
export = assertValidNumber;
