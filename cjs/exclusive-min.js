"use strict";
function assertExclusiveMin(arg, min, name) {
    if (name === void 0) { name = 'arg'; }
    // @ts-expect-error: It's alright to have these be any type.
    if (arg <= min)
        throw new TypeError("\"".concat(name, "\" must be bigger than ").concat(min, ". Got ").concat(arg, " of type ").concat(typeof arg, "."));
}
assertExclusiveMin.assertExclusiveMin = assertExclusiveMin;
module.exports = assertExclusiveMin;
