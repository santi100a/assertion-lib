"use strict";
var assertTypeOf = require("./type-of");
function assertValidNumber(num, name) {
    if (name === void 0) { name = 'num'; }
    assertTypeOf(num, 'number', name);
    if (isNaN(num))
        throw new TypeError("\"".concat(name, "\" must not be NaN. Got ").concat(num, "."));
}
module.exports = assertValidNumber;
