"use strict";
exports.__esModule = true;
exports.assertMin = void 0;
/**
 * Asserts `arg` is bigger than or equal than `min`. Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `TypeError`'s message.
 * @param min The minimum value for `arg`.
 */
function assertMin(arg, name, min) {
    // @ts-expect-error: It's alright to have these be any type.
    if (arg < min)
        throw new RangeError("\"".concat(name, "\" must be bigger than or equal to ").concat(min, ". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertMin = assertMin;
