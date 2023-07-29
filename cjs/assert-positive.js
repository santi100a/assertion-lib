"use strict";
exports.__esModule = true;
exports.assertPositive = void 0;
var type_of_1 = require("./type-of");
/**
 * Asserts `num` is either zero or a positive number. Throws a `TypeError` otherwise.
 *
 * @param num The number to check for positivity or equality to zero.
 * @param name The name to display in the `TypeError`'s message ("arg" by default).
 */
function assertPositive(num, name) {
    if (name === void 0) { name = 'arg'; }
    (0, type_of_1.assertTypeOf)(num, 'number', 'val');
    if (num < 0)
        throw new TypeError("\"".concat(name, "\" must be positive or zero. Got ").concat(num, " of type ").concat(typeof num, "."));
}
exports.assertPositive = assertPositive;
