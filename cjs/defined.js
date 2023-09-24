"use strict";
function assertDefined(element, name) {
    if (name === void 0) { name = 'element'; }
    if (element === null || element === undefined)
        throw new TypeError("\"".concat(name, "\" must be neither null nor undefined. Got \"").concat(element, "\"."));
}
module.exports = assertDefined;
