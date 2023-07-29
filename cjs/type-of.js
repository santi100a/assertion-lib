"use strict";
var one_of_1 = require("./one-of");
/** Implementation */
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
    (0, one_of_1.assertOneOf)(expectedType, 'expectedType', TYPES);
    if (typeof arg !== expectedType)
        throw new TypeError("\"".concat(name, "\" must be of type \"").concat(expectedType, "\". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
assertTypeOf.assertTypeOf = assertTypeOf;
module.exports = assertTypeOf;
