# Santi's Assertion Library

[![Build Status][build status badge]][actions]
[![npm homepage][npm homepage badge]][npm homepage]
[![GitHub stars][gh stars badge]][repo]
[![License][license badge]][repo]
[![Bundlephobia stats][bundlephobia badge]][bundlephobia page]
[![Discord community][discord badge]][discord server]

[license badge]: https://img.shields.io/github/license/santi100a/assertion-lib.svg
[build status badge]: https://github.com/santi100a/assertion-lib/actions/workflows/ci.yml/badge.svg
[npm homepage badge]: https://img.shields.io/npm/v/@santi100a/assertion-lib
[gh stars badge]: https://img.shields.io/github/stars/santi100a/assertion-lib.svg
[bundlephobia badge]: https://img.shields.io/bundlephobia/min/@santi100a/assertion-lib
[discord badge]: https://img.shields.io/badge/Join%20us%20on%20Discord-7289DA?logo=discord&logoColor=white
[actions]: https://github.com/santi100a/assertion-lib/actions
[npm homepage]: https://npmjs.org/package/@santi100a/assertion-lib
[repo]: https://github.com/santi100a/assertion-lib
[bundlephobia page]: https://bundlephobia.com/package/@santi100a/assertion-lib@latest
[discord server]: https://discord.com/channels/1110705940459696179/1110706009086902303

- 🚀 Lightweight and fast^
- 👴 ES3-compliant\*
- 💻 Portable between the browser and Node.js
- 📘 Comes with built-in TypeScript definitions
- 📑 Split into a lot of modules (under `cjs/`) so you get to choose what you want
- 🎨 Includes a wide array of assertion functions
- 💪 Very customizable (you get to choose comparison logic, name displayed on error, et cetera)

\*_Hasn't been tested in an actual ES3 environment. Feel free to open an issue or pull request if you find any non-ES3 thing. See "Contribute" for instructions on how to do so._

_^The source code is about 2 kilobytes._

## What's this?

This is an assertion library for types and conditions. It's designed to be lightweight and portable between
the browser and Node.js.

## Contribute

Wanna contribute? [File an issue](https://github.com/santi100a/assertion-lib/issues) or [pull request](https://github.com/santi100a/assertion-lib/pulls)!
Make sure you follow the [contribution Code of Conduct](https://github.com/santi100a/assertion-lib/blob/main/CODE_OF_CONDUCT.md).

## Installation

- Via NPM: `npm install @santi100a/assertion-lib`
- Via Yarn: `yarn add @santi100a/assertion-lib`
- Via PNPM: `pnpm install @santi100a/assertion-lib`

### API

- `function assert(condition: boolean, params?: AssertOptionalParams): void;`

  Asserts that `condition` is truthy. Throws an `AssertionError` otherwise.

  | Parameter               | Type                         | Description                               |
  | ----------------------- | ---------------------------- | ----------------------------------------- |
  | `condition`             | `boolean`                    | The condition to assert.                  |
  | `assertParams`          | `AssertOptionalParams<E, A>` | `AssertionError` options.                 |
  | `assertParams.expected` | `E`                          | Expected value for the assertion.         |
  | `assertParams.actual`   | `A`                          | Received value for the assertion.         |
  | `assertParams.operator` | `string`                     | Optional operator used for the assertion. |

- `function assertTypeOf(arg: any, expectedType: Type, name: string): void;` (since 1.0.6, `name` is optional since 1.0.8)

  Asserts that the type of `arg` is `expectedType`. Throws a `TypeError` otherwise.
  | Parameter | Type | Description |
  |-------------------------|------------------------------|-------------------------------------------|
  | `arg` | `any` | An expression whose type is to be asserted. |
  | `expectedType` | `Type` | The expected type. |
  | `name` | `string` | An optional expression name to be put in the `TypeError`'s message. Defaults to "arg". |

- `function assertOneOf<T = unknown>(arg: any, name: string, choices: any[]): void;` (since 1.0.6, type param bound to `choices` added in 1.0.8)

  Asserts `arg` is one of `choices`, using `comparator` to compare `arg` against each choice.
  Throws a `TypeError` otherwise.

  **WARNING:**
  **Since v2, the `shallow` argument is no longer valid -- it has been replaced with `comparator`.**

  This is done so you can use this library without the need to install `@santi100/equal-lib`, whilst also
  adding flexibility to use custom comparison logic or the deep equality library of your choice.

  | Parameter                   | Type                                           | Description                                                                                      |
  | --------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------ |
  | `arg`                       | `any`                                          | The value that's expected to be included within `choices`.                                       |
  | `name`                      | `string`                                       | An expression name to be put in the `TypeError`'s message.                                       |
  | `choices`                   | `T[]`                                          | An array containing the posible values `arg` should have in order for an error not to be thrown. |
  | `comparator?` (since 2.0.0) | `(a: unknown, b: T) => boolean` or `undefined` | A custom comparator to add, for instance, deep equality!                                         |

- `function assertInteger(arg: number, name: string): void;` (since 1.0.6)

  Asserts `arg` is an integer. Throws a `TypeError` otherwise.

- `function assertMin(arg: any, name: string, min: any): void;` (since 1.0.6)

  Asserts `arg` is bigger or equal than `min`. Throws a `TypeError` otherwise.

- `function assertMax(arg: any, name: string, max: any): void;` (since 1.0.6)

  Asserts `arg` is smaller or equal than `max`. Throws a `TypeError` otherwise.

- `function assertRange(arg: any, name: string, min: any, max: any): void;` (since 1.0.6)

  Asserts `arg` is **NEITHER** smaller than `min` **NOR** bigger than `max`.
  Throws a `TypeError` (`RangeError` since 1.0.7) otherwise.

- `function assertArray(arg: any, name?: string): void;` (since 1.0.7)

  Asserts `arg` is an Array. Throws a `TypeError` otherwise.

- `function assertDefined<T = unknown>(element: T): void;` (since 2.0.1)

  Checks if a given element is defined, i.e., not null or undefined.
  If the element is null or undefined, the function throws a TypeError with a message indicating the name of the element.

  | Parameter | Type | Description                                | Optional? |
  | --------- | ---- | ------------------------------------------ | --------- |
  | `element` | `T`  | The value to be checked for being defined. | No        |

  Throws an error if the element is null or undefined.

  Example:

  ```typescript
  assertDefined(5); // No error thrown
  assertDefined(null); // Throws TypeError: 'element' is null
  assertDefined(undefined); // Throws TypeError: 'element' is undefined
  assertDefined('hello'); // No error thrown
  ```

- `function assertMatch(str: string, re: RegExp, name?: string): void;` (since 2.0.1)

  Asserts `str` matches `re`. Throws a `TypeError` otherwise.

  | Parameter          | Type     | Description                                                                | Optional? |
  | ------------------ | -------- | -------------------------------------------------------------------------- | --------- |
  | `str`              | `string` | The string to match against `re`.                                          | No        |
  | `re`               | `RegExp` | The regular expression to match `str` against.                             | No        |
  | `name`             | `string` | The displayed name in the `TypeError` thrown if `str` does not match `re`. |
  | Defaults to `str`. | No       |

- `function assertArrayTypes<T = unknown>(values: T[], types: Type[]): void;` (since 2.0.3)
  | Parameter | Type | Description | Optional? |
  | --------- | ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- |
  | `values` | `T[]` | An array of elements to be checked. | No |
  | `types` | `Type[]` | An array of strings representing the expected types of elements in the array. | No |

- `function assertArrayTypes<T = unknown>(values: T[], types: Type[], name: string): void;` (since 2.0.3)
  | Parameter | Type | Description | Optional? |
  | --------- | ------------ | ---------------------------------------------------------------------------------------------------------------- | --------- |
  | `values` | `T[]` | An array of elements to be checked. | No |
  | `types` | `Type[]` | An array of strings representing the expected types of elements in the array. | No |
  | `name` | `string` | A string representing the name of the "values" array. | No |

## Usage examples

```typescript
// Import the assertion functions

// CJS
const assert = require('@santi100a/assertion-lib/cjs/assert');
const assertTypeOf = require('@santi100a/assertion-lib/cjs/type-of');
const assertOneOf = require('@santi100a/assertion-lib/cjs/one-of');
const assertInteger = require('@santi100a/assertion-lib/cjs/integer');
const assertMin = require('@santi100a/assertion-lib/cjs/min');
const assertMax = require('@santi100a/assertion-lib/cjs/max');
const assertRange = require('@santi100a/assertion-lib/cjs/range');
const assertArray = require('@santi100a/assertion-lib/cjs/array');
const assertDefined = require('@santi100a/assertion-lib/cjs/defined');
const assertMatch = require('@santi100a/assertion-lib/cjs/match');

// TypeScript
import assert = require('@santi100a/assertion-lib/cjs/assert');
import assertTypeOf = require('@santi100a/assertion-lib/cjs/type-of');
import assertOneOf = require('@santi100a/assertion-lib/cjs/one-of');
import assertInteger = require('@santi100a/assertion-lib/cjs/integer');
import assertMin = require('@santi100a/assertion-lib/cjs/min');
import assertMax = require('@santi100a/assertion-lib/cjs/max');
import assertRange = require('@santi100a/assertion-lib/cjs/range');
import assertArray = require('@santi100a/assertion-lib/cjs/array');
import assertDefined = require('@santi100a/assertion-lib/cjs/defined');
import assertMatch = require('@santi100a/assertion-lib/cjs/match');

// ESM
import assert from '@santi100a/assertion-lib/cjs/assert';
import assertTypeOf from '@santi100a/assertion-lib/cjs/type-of';
import assertOneOf from '@santi100a/assertion-lib/cjs/one-of';
import assertInteger from '@santi100a/assertion-lib/cjs/integer';
import assertMin from '@santi100a/assertion-lib/cjs/min';
import assertMax from '@santi100a/assertion-lib/cjs/max';
import assertRange from '@santi100a/assertion-lib/cjs/range';
import assertArray from '@santi100a/assertion-lib/cjs/array';
import assertDefined from '@santi100a/assertion-lib/cjs/defined';
import assertMatch from '@santi100a/assertion-lib/cjs/match';

// Or import it all
import * as assertionLib from '@santi100a/assertion-lib'; // ESM or TypeScript
const assertionLib = require('@santi100a/assertion-lib'); // CJS
// Usage example for assert
function divide(a, b) {
	assert(typeof a === 'number' && typeof b === 'number', {
		message: 'Arguments must be numbers.'
	});

	assert(b !== 0, {
		message: 'Cannot divide by zero.',
		expected: 'Non-zero value',
		actual: b
	});

	return a / b;
}

// Usage example for assertTypeOf
function greet(name) {
	assertTypeOf(name, 'string', 'name');

	return `Hello, ${name}!`;
}

// Usage example for assertOneOf
function checkOperator(operator) {
	assertOneOf(
		operator,
		'operator',
		['+', '-', '*', '/'],
		(a, b) => a.trim() === b.trim()
	);
	return `Valid operator: ${operator}`;
}

// Usage example for assertInteger
function multiplyByTwo(num) {
	assertInteger(num, 'num');
	return num * 2;
}

// Usage example for assertMin
function greetWithMinimumLength(name) {
	assertMin(name.length, 'name', 3);
	return `Hello, ${name}!`;
}

// Usage example for assertMax
function greetWithMaximumLength(name) {
	assertMax(name.length, 'name', 10);
	return `Hello, ${name}!`;
}

// Usage example for assertRange
function greetWithPreferredLength(name) {
	assertRange(name.length, 'name', 5, 8);
	return `Hello, ${name}!`;
}

// Usage example for assertArray
function sumNumbers(numbers) {
	assertArray(numbers, 'numbers');
	return numbers.reduce((sum, num) => sum + num, 0);
}

// Usage example for assertDefined
function greetIfDefined(name) {
	assertDefined(name, 'name');
	return `Hello, ${name}!`;
}

// Usage example for assertMatch
function isValidEmail(email) {
	assertMatch(
		email,
		/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
		'email'
	);
	return true;
}
```
