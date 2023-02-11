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
exports.assertType = exports.assert = void 0;
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
    var _a = errorParams || {}, expected = _a.expected, actual = _a.actual, operator = _a.operator;
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
