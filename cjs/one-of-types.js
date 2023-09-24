"use strict";
var core_1 = require("./core");
var assertOneOf = require("./one-of");
function assertOneOfTypes(value, types, name) {
    if (name === void 0) { name = 'value'; }
    var valueType = typeof value;
    for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
        var type = types_1[_i];
        assertOneOf(type, 'type', core_1.TYPES);
    }
    assertOneOf(valueType, "typeof ".concat(name), types);
}
module.exports = assertOneOfTypes;
