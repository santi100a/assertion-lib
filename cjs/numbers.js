"use strict";
exports.__esModule = true;
exports.assertNegative = exports.assertPositive = exports.assertExclusiveMin = exports.assertExclusiveMax = void 0;
var _1 = require(".");
/**
 * Asserts `arg` is smaller than `max`. Throws a `TypeError` otherwise.
 *
 * @param arg The value whose value is to be asserted to be smaller than `max`.
 * @param max The maximum value `arg` is allowed to have.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
function assertExclusiveMax(arg, max, name) {
    if (name === void 0) { name = 'arg'; }
    // @ts-expect-error: It's alright to have these be any type.
    if (arg >= max)
        throw new TypeError("\"".concat(name, "\" must be smaller than ").concat(max, ". Got ").concat(arg, " of type ").concat(typeof arg, "."));
}
exports.assertExclusiveMax = assertExclusiveMax;
/**
 * Asserts `arg` is bigger than `min`. Throws a `TypeError` otherwise.
 *
 * @param arg The value whose value is to be asserted to be bigger than `max`.
 * @param min The minimum value `arg` is allowed to have.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
function assertExclusiveMin(arg, min, name) {
    if (name === void 0) { name = 'arg'; }
    // @ts-expect-error: It's alright to have these be any type.
    if (arg <= min)
        throw new TypeError("\"".concat(name, "\" must be bigger than ").concat(min, ". Got ").concat(arg, " of type ").concat(typeof arg, "."));
}
exports.assertExclusiveMin = assertExclusiveMin;
/**
 * Asserts `num` is either zero or a positive number. Throws a `TypeError` otherwise.
 *
 * @param num The number to check for positivity or equality to zero.
 * @param name The name to display in the `TypeError`'s message ("arg" by default).
 */
function assertPositive(num, name) {
    if (name === void 0) { name = 'arg'; }
    (0, _1.assertTypeOf)(num, 'number', 'val');
    if (num < 0)
        throw new TypeError("\"".concat(name, "\" must be positive or zero. Got ").concat(num, " of type ").concat(typeof num, "."));
}
exports.assertPositive = assertPositive;
/**
 * Asserts `num` is a negative number. Throws a `TypeError` otherwise.
 *
 * @param num The number to check for negativity.
 * @param name The name to display in the `TypeError`'s message ("arg" by default).
 */
function assertNegative(num, name) {
    if (name === void 0) { name = 'arg'; }
    (0, _1.assertTypeOf)(num, 'number', 'val');
    if (num >= 0)
        throw new TypeError("\"".concat(name, "\" must be negative. Got ").concat(num, " of type ").concat(typeof num, "."));
}
exports.assertNegative = assertNegative;
