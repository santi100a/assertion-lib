"use strict";
exports.__esModule = true;
exports.assertType = void 0;
var core_1 = require("./core");
/**
 * Asserts that the type of `val` is `expectedType`.
 * Throws an {@link AssertionError} otherwise.
 *
 * @param val An expression whose type is to be asserted.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @deprecated Use {@link assertTypeOf} instead.
 */
function assertType(val, expectedType) {
    var wrongType = typeof val !== expectedType;
    if (wrongType)
        throw new core_1.AssertionError(expectedType, typeof val, 'typeof');
}
exports.assertType = assertType;
