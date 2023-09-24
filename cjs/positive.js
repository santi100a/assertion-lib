"use strict";
var type_of_1 = require("./type-of");
function assertPositive(num, name) {
    if (name === void 0) { name = 'num'; }
    (0, type_of_1.assertTypeOf)(num, 'number', 'num');
    if (num < 0)
        throw new RangeError("\"".concat(name, "\" must be positive or zero. Got ").concat(num, " of type ").concat(typeof num, "."));
}
assertPositive.assertPositive = assertPositive;
module.exports = assertPositive;
