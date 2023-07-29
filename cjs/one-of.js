"use strict";
var assertTypeOf = require("./type-of");
/** Implementation */
function assertOneOf(arg, name, choices, comparator) {
    if (comparator === void 0) { comparator = function (a, b) { return a === b; }; }
    function __indexOf(arr, item) {
        for (var idx in arr) {
            if (comparator(arr[idx], item))
                return arr[idx];
        }
        return -1;
    }
    if (typeof comparator === 'boolean')
        throw new TypeError('The `shallow` argument is no longer valid. Please pass a function instead.');
    else if (typeof comparator !== 'function')
        assertTypeOf(comparator, 'function', 'comparator');
    if (__indexOf(choices, arg) === -1)
        throw new TypeError("\"".concat(name, "\" must be one of \"").concat(choices.join(', '), "\". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
assertOneOf.assertOneOf = assertOneOf;
module.exports = assertOneOf;
