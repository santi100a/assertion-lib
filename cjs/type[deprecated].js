"use strict";
var core_1 = require("./core");
/** @deprecated */
function assertType(val, expectedType) {
    var wrongType = typeof val !== expectedType;
    if (wrongType)
        throw new core_1.AssertionError(expectedType, typeof val, 'typeof');
}
assertType.assertType = assertType;
module.exports = assertType;
