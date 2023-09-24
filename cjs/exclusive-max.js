"use strict";
function assertExclusiveMax(arg, max, name) {
    if (name === void 0) { name = 'arg'; }
    // @ts-expect-error: It's alright to have these be any type.
    if (arg >= max)
        throw new RangeError("\"".concat(name, "\" must be smaller than ").concat(max, ". Got ").concat(arg, " of type ").concat(typeof arg, "."));
}
assertExclusiveMax.assertExclusiveMax = assertExclusiveMax;
module.exports = assertExclusiveMax;
