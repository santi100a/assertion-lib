"use strict";
exports.__esModule = true;
exports.assertInteger = void 0;
/**
 * Asserts `arg` is an integer. Throws a `TypeError` otherwise.
*
* @param arg Any number.
* @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
*/
function assertInteger(arg, name) {
    if (name === void 0) { name = 'arg'; }
    function __isInteger(n) {
        return n - Math.floor(n) <= 0;
    }
    if (!__isInteger(arg))
        throw new TypeError("\"".concat(name, "\" must be an integer. Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertInteger = assertInteger;
