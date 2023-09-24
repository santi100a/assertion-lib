"use strict";
var assertTypeOf = require("./type-of");
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
function assertFinite(num, name) {
    var _a;
    if (name === void 0) { name = 'num'; }
    assertTypeOf(num, 'number', name);
    var abs = (_a = Math.abs) !== null && _a !== void 0 ? _a : (function (x) { return x >= 0 ? x : -x; });
    if (abs(num) === Infinity)
        throw new RangeError("\"".concat(name, "\" must be finite. Got ").concat(num, "."));
}
module.exports = assertFinite;
