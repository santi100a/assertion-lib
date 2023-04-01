"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.assertRange = exports.assertMax = exports.assertMin = exports.assertInteger = exports.assertOneOf = exports.assertTypeOf = exports.assertType = exports.assert = exports.AssertionError = void 0;
var equal_lib_1 = require("@santi100/equal-lib");
function indexOf(arr, item) {
    for (var idx in arr) {
        if ((0, equal_lib_1.deepEquality)(arr[idx], item))
            return arr[idx];
    }
    return -1;
}
var AssertionError = /** @class */ (function (_super) {
    __extends(AssertionError, _super);
    function AssertionError(expected, actual, operator) {
        var _this = _super.call(this, "Assertion failed! Expected ".concat(expected, ". Got ").concat(actual, " when using operator ").concat(operator, ".")) || this;
        _this.expected = expected;
        _this.actual = actual;
        _this.operator = operator;
        return _this;
    }
    return AssertionError;
}(Error));
exports.AssertionError = AssertionError;
/**
 * Asserts that `condition` is truthy.
 * Throws an {@link AssertionError} otherwise.
 *
 * @param {boolean} condition A boolean condition to assert.
 * @param {AssertOptionalParams} errorParams Parameters for the {@link AssertionError} that will be
 * thrown in case the condition is falsy.
 * @param {unknown} errorParams.expected Expected value for the assertion.
 * @param {unknown} errorParams.actual   Received value for the assertion.
 * @param {string?} errorParams.operator Optional operator used for the assertion.
 * @returns {void} Nothing.
 */
function assert(condition, errorParams) {
    if (errorParams === void 0) { errorParams = {
        expected: true,
        actual: false,
        operator: '==='
    }; }
    var expected = errorParams.expected, actual = errorParams.actual, operator = errorParams.operator;
    if (!condition)
        throw new AssertionError(expected, actual, operator);
}
exports.assert = assert;
/**
 * Asserts that the type of `val` is `expectedType`.
 * Throws an {@link AssertionError} otherwise.
 *
 * @param {unknown} val An expression to assert its type.
 * @param {string} expectedType The type to assert.
 * @returns {void} Nothing.
 */
function assertType(val, expectedType) {
    var wrongType = typeof val !== expectedType;
    if (wrongType)
        throw new AssertionError(expectedType, typeof val, 'typeof');
}
exports.assertType = assertType;
/**
 * Asserts that the type of `arg` is `expectedType`. Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @param name The name for the expression of `arg`.
 */
function assertTypeOf(arg, expectedType, name) {
    var TYPES = [
        'string',
        'number',
        'bigint',
        'boolean',
        'symbol',
        'undefined',
        'object',
        'function'
    ];
    if (TYPES.indexOf(expectedType) === -1)
        throw new TypeError("".concat(name, " must be one of ").concat(TYPES.join(', '), ". Got \"").concat(arg, " of type \"").concat(typeof arg, "\"."));
    if (typeof arg !== expectedType)
        throw new TypeError("\"".concat(name, "\" must be of type \"").concat(expectedType, "\". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertTypeOf = assertTypeOf;
/**
 * Asserts `arg` is one of `choices`.  Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name The name for the expression of `arg`.
 * @param choices An array containing the posible values `arg` should have in order for an error not
 * to be thrown.
 */
function assertOneOf(arg, name, choices) {
    if (indexOf(choices, arg) === -1)
        throw new TypeError("\"".concat(name, "\" must be one of \"").concat(choices.join(', '), "\". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertOneOf = assertOneOf;
function __isInteger(n) {
    return n - Math.floor(n) <= 0;
}
/**
 * Asserts `arg` is an integer. Throws a `TypeError` otherwise.
 *
 * @param arg Any number.
 * @param name The name for the expression for `arg`.
 */
function assertInteger(arg, name) {
    if (!__isInteger(arg))
        throw new TypeError("\"".concat(name, "\" must be an integer. Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertInteger = assertInteger;
/**
 * Asserts `arg` is bigger or equal than `min`. Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name The name of the expression for `arg`.
 * @param min The minimum value for `arg`.
 */
function assertMin(arg, name, min) {
    if (arg < min)
        throw new TypeError("\"".concat(name, "\" must be bigger than ").concat(min, ". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertMin = assertMin;
/**
 * Asserts `arg` is smaller or equal than `max`. Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name The name of the expression for `arg`.
 * @param max The maximum value for `arg`.
 */
function assertMax(arg, name, max) {
    if (arg > max)
        throw new TypeError("\"".concat(name, "\" must be smaller than ").concat(max, ". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertMax = assertMax;
/**
 * Asserts `arg` is between `min + 1` and `max + 1` (inclusive). Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name The name of the expression for `arg`.
 * @param min The minimum value for `arg`.
 * @param max The maximum value for `arg`.
 */
function assertRange(arg, name, min, max) {
    if (arg > max || arg < min)
        throw new TypeError("\"".concat(name, "\" must be smaller than ").concat(max, " and bigger than ").concat(min, ". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertRange = assertRange;
