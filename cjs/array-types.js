"use strict";
var core_1 = require("./core");
var assertEqual = require("./equal");
var assertOneOf = require("./one-of");
function assertArrayTypes(values, types, name) {
    if (name === void 0) { name = 'values'; }
    assertEqual(values.length, types.length, 'values.length', 'types.length');
    for (var c = 0; c < types.length; c++) {
        var type = types[c];
        var value = values[c];
        var typeOfItem = typeof value;
        assertOneOf(type, 'types', core_1.TYPES);
        if (type !== typeOfItem)
            throw new TypeError("".concat(name, "[").concat(c, "] was expected to be of type \"").concat(type, "\". Got \"").concat(value, "\" of type \"").concat(typeof value, "\"."));
    }
}
module.exports = assertArrayTypes;
