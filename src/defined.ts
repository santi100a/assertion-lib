/**
 * Checks if a given element is defined, i.e., not null or undefined.
 * If the element is null or undefined, the function throws a TypeError with a message indicating the name of the element.
 *
 * @param element The value to be checked for being defined.
 * @throws If the element is null or undefined.
 *
 * @example
 * assertDefined(5); // No error thrown
 * assertDefined(null); // Throws TypeError: 'element' is null
 * assertDefined(undefined); // Throws TypeError: 'element' is undefined
 * assertDefined('hello'); // No error thrown
 */
function assertDefined<T = unknown>(element: T): void;
/**
 * Checks if a given `element` is defined, i.e., not null or undefined.
 * If `element` is null or undefined, the function throws a `TypeError`
 * with a message indicating the name of the element.
 *
 * @param element The value to be checked for being defined.
 * @param name The name of `element`'s expression for the `TypeError`.
 * @throws If the element is null or undefined.
 *
 * @example
 * assertDefined(null, 'something'); // Throws TypeError: 'something' is null
 * assertDefined(undefined, 'something'); // Throws TypeError: 'something' is undefined
 * assertDefined('hello'); // No error thrown
 */
function assertDefined<T = unknown>(element: T, name: string): void;

function assertDefined<T = unknown>(element: T, name = 'element') {
	if (element === null || element === undefined)
		throw new TypeError(
			`"${name}" must be neither null nor undefined. Got "${element}".`
		);
}

export = assertDefined;
