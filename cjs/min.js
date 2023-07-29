"use strict";
function assertMin(arg, name, min) {
    // @ts-expect-error: It's alright to have these be any type.
    if (arg < min)
        throw new RangeError("\"".concat(name, "\" must be bigger than or equal to ").concat(min, ". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
assertMin.assertMin = assertMin;
module.exports = assertMin;
