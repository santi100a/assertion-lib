"use strict";
exports.__esModule = true;
exports.assertOneOf = void 0;
var equal_lib_1 = require("@santi100/equal-lib");
/**
 * Asserts `arg` is one of `choices`.  Throws a `TypeError` otherwise.
 *
 * @param arg The value that's expected to be included within `choices`.
 * @param name An expression name to be put in the `TypeError`'s message.
 * @param choices An array containing the posible values `arg` should have in order for an error not
 * to be thrown.
 * @param shallow Whether or not to use shallow equality (default deep equality is powered by
   `@santi100/equal-lib` 😉).
 */
function assertOneOf(arg, name, choices, shallow) {
    if (shallow === void 0) { shallow = false; }
    function __indexOf(arr, item) {
        for (var idx in arr) {
            if ((0, equal_lib_1.deepEquality)(arr[idx], item))
                return arr[idx];
        }
        return -1;
    }
    if (shallow ? choices.indexOf(arg) : __indexOf(choices, arg) === -1)
        throw new TypeError("\"".concat(name, "\" must be one of \"").concat(choices.join(', '), "\". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertOneOf = assertOneOf;
