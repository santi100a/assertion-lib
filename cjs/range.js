"use strict";
function assertRange(arg, name, min, max) {
    // @ts-expect-error: It's alright to have these be any type.
    if (arg > max || arg < min)
        throw new RangeError("\"".concat(name, "\" must be smaller than ").concat(max, " and bigger than ").concat(min, ". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
assertRange.assertRange = assertRange;
module.exports = assertRange;
