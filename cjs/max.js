"use strict";
/** Implementation */
function assertMax(arg, name, max) {
    // @ts-expect-error: It's alright to have these be any type.
    if (arg > max)
        throw new RangeError("\"".concat(name, "\" must be smaller than or equal to ").concat(max, ". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
assertMax.assertMax = assertMax;
module.exports = assertMax;
