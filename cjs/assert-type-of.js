"use strict";
exports.__esModule = true;
exports.assertTypeOf = void 0;
var assert_one_of_1 = require("./assert-one-of");
/**
 * Asserts that the type of `arg` is `expectedType`. Throws a `TypeError` otherwise.
 *
 * @param arg An expression whose type is to be asserted.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 */
function assertTypeOf(arg, expectedType, name) {
    if (name === void 0) { name = 'arg'; }
    var TYPES = [
        'string',
        'number',
        'bigint',
        'boolean',
        'symbol',
        'undefined',
        'object',
        'function'
    ];
    (0, assert_one_of_1.assertOneOf)(expectedType, 'expectedType', TYPES);
    if (typeof arg !== expectedType)
        throw new TypeError("\"".concat(name, "\" must be of type \"").concat(expectedType, "\". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertTypeOf = assertTypeOf;
