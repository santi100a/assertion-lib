'use strict';
var __extends =
	(this && this.__extends) ||
	(function () {
		var extendStatics = function (d, b) {
			extendStatics =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (d, b) {
						d.__proto__ = b;
					}) ||
				function (d, b) {
					for (var p in b)
						if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
				};
			return extendStatics(d, b);
		};
		return function (d, b) {
			if (typeof b !== 'function' && b !== null)
				throw new TypeError(
					'Class extends value ' + String(b) + ' is not a constructor or null'
				);
			extendStatics(d, b);
			function __() {
				this.constructor = d;
			}
			d.prototype =
				b === null
					? Object.create(b)
					: ((__.prototype = b.prototype), new __());
		};
	})();
exports.__esModule = true;
exports.AssertionError = exports.TYPES = void 0;
exports.TYPES = [
	'string',
	'number',
	'bigint',
	'boolean',
	'symbol',
	'undefined',
	'object',
	'function'
];
var AssertionError = /** @class */ (function (_super) {
	__extends(AssertionError, _super);
	function AssertionError(expected, actual, operator) {
		var _this =
			_super.call(
				this,
				'Assertion failed! Expected '
					.concat(expected, '. Got ')
					.concat(actual, ' when using operator ')
					.concat(operator, '.')
			) || this;
		_this.expected = expected;
		_this.actual = actual;
		_this.operator = operator;
		return _this;
	}
	return AssertionError;
})(Error);
exports.AssertionError = AssertionError;
