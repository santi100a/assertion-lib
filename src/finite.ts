import assertTypeOf = require('./type-of');

function assertFinite(num: number): void;
function assertFinite(num: number, name: string): void;

/**
 * Checks if a given number is finite. Throws a `RangeError` if the number is not finite.
 * 
 * @param num The number to be checked for finiteness.
 * @param name The name of the number being checked. Defaults to 'num'.
 * @throws A TypeError if `num` is not a number.
 * @throws A RangeError if the number is not finite.
 * @example
 * import assertFinite from './assertFinite';
 * 
 * assertFinite(5); // No error
 * assertFinite(Infinity); // Throws a RangeError
 * assertFinite(-Infinity, 'myNum'); // Throws a RangeError with custom name
 */
function assertFinite(num: number, name = 'num') {
    assertTypeOf(num, 'number', name);
    const abs = Math.abs ?? ((x: number) => x >= 0 ? x : -x);

    if (abs(num) === Infinity) 
        throw new RangeError(`"${name}" must be finite. Got ${num}.`);
}

export = assertFinite;
