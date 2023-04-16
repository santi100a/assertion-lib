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
exports.assertExclusiveMin = exports.assertExclusiveMax = exports.assertInstanceOf = exports.assertArray = exports.assertRange = exports.assertMax = exports.assertMin = exports.assertInteger = exports.assertOneOf = exports.assertTypeOf = exports.assertType = exports.assert = exports.AssertionError = void 0;
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
 * @param val An expression whose type is to be asserted.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @deprecated Use {@link assertTypeOf} instead.
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
 * @param arg An expression whose type is to be asserted.
 * @param expectedType The expected type. Must be one of {@link Type}.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 */
function assertTypeOf(arg, expectedType, name) {
    if (name === void 0) { name = 'arg'; }
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
    assertOneOf(expectedType, 'expectedType', TYPES);
    if (typeof arg !== expectedType)
        throw new TypeError("\"".concat(name, "\" must be of type \"").concat(expectedType, "\". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertTypeOf = assertTypeOf;
/**
 * Asserts `arg` is one of `choices`.  Throws a `TypeError` otherwise.
 *
 * @param arg The value that's expected to be included within `choices`.
 * @param name An expression name to be put in the `TypeError`'s message.
 * @param choices An array containing the posible values `arg` should have in order for an error not
 * to be thrown.
 * @param shallow Whether or not to use shallow equality (default deep equality is powered by
   `@santi100/equal-lib` 😉).
 */
function assertOneOf(arg, name, choices, shallow) {
    if (shallow === void 0) { shallow = false; }
    if (shallow ? choices.indexOf(arg) : indexOf(choices, arg) === -1)
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
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 */
function assertInteger(arg, name) {
    if (name === void 0) { name = 'arg'; }
    if (!__isInteger(arg))
        throw new TypeError("\"".concat(name, "\" must be an integer. Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertInteger = assertInteger;
/**
 * Asserts `arg` is bigger than or equal than `min`. Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `TypeError`'s message.
 * @param min The minimum value for `arg`.
 */
function assertMin(arg, name, min) {
    if (arg < min)
        throw new RangeError("\"".concat(name, "\" must be bigger than or equal to ").concat(min, ". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertMin = assertMin;
/**
 * Asserts `arg` is smaller or equal than `max`. Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `TypeError`'s message.

 * @param max The maximum value for `arg`.
 */
function assertMax(arg, name, max) {
    if (arg > max)
        throw new RangeError("\"".concat(name, "\" must be smaller than or equal to ").concat(max, ". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertMax = assertMax;
/**
 * Asserts `arg` is between `min + 1` and `max + 1` (inclusive). Throws a `RangeError` otherwise.
 *
 * @param arg Any value.
 * @param name An expression name to be put in the `TypeError`'s message.
 * @param min The minimum value for `arg`.
 * @param max The maximum value for `arg`.
 */
function assertRange(arg, name, min, max) {
    if (arg > max || arg < min)
        throw new RangeError("\"".concat(name, "\" must be smaller than ").concat(max, " and bigger than ").concat(min, ". Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertRange = assertRange;
/**
 * Asserts `arg` is an Array. Throws a `TypeError` otherwise.
 *
 * @param arg Any value.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 */
function assertArray(arg, name) {
    if (name === void 0) { name = 'arg'; }
    if (!(arg instanceof Array))
        throw new TypeError("\"".concat(name, "\" must be an Array. Got \"").concat(arg, "\" of type \"").concat(typeof arg, "\"."));
}
exports.assertArray = assertArray;
/**
 * Asserts `arg` is an instance of `clas`. Throws a `TypeError` otherwise.
 *
 * @param arg An object whose class is to be asserted to be `clas`.
 * @param clas Any valid constructor.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
function assertInstanceOf(arg, clas, name) {
    if (name === void 0) { name = 'arg'; }
    try {
        new clas();
    }
    catch (_) {
        throw new TypeError("\"clas\" must be a valid constructor. Got ".concat(clas, " of type ").concat(typeof clas, "."));
    }
    if (!(arg instanceof clas))
        throw new TypeError("".concat(name, " must be an instance of ").concat(clas.name, ". Got ").concat(arg, " of type ").concat(typeof arg, "."));
}
exports.assertInstanceOf = assertInstanceOf;
/**
 * Asserts `arg` is smaller than `max`. Throws a `TypeError` otherwise.
 *
 * @param arg The value whose value is to be asserted to be smaller than `max`.
 * @param max The maximum value `arg` is allowed to have.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
function assertExclusiveMax(arg, max, name) {
    if (name === void 0) { name = 'arg'; }
    if (arg >= max)
        throw new TypeError("\"".concat(name, "\" must be smaller than ").concat(max, ". Got ").concat(arg, " of type ").concat(typeof arg, "."));
}
exports.assertExclusiveMax = assertExclusiveMax;
/**
 * Asserts `arg` is bigger than `min`. Throws a `TypeError` otherwise.
 *
 * @param arg The value whose value is to be asserted to be bigger than `max`.
 * @param min The minimum value `arg` is allowed to have.
 * @param name An optional expression name to be put in the `TypeError`'s message. Defaults to "arg".
 * @since 1.0.8
 */
function assertExclusiveMin(arg, min, name) {
    if (name === void 0) { name = 'arg'; }
    if (arg <= min)
        throw new TypeError("\"".concat(name, "\" must be bigger than ").concat(min, ". Got ").concat(arg, " of type ").concat(typeof arg, "."));
}
exports.assertExclusiveMin = assertExclusiveMin;
