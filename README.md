# Santi's Assertion Library

[![Build Status][build status badge]][actions]
[![npm homepage][npm homepage badge]][npm homepage]
[![GitHub stars][gh stars badge]][repo]
[![License][license badge]][repo]
[![Bundlephobia stats][bundlephobia badge]][bundlephobia page]
[![Discord community][discord badge]][discord server]

[license badge]: https://img.shields.io/github/license/santi100a/assertion-lib.svg
[build status badge]: https://github.com/santi100a/assertion-lib/actions/workflows/ci.yml/badge.svg
[npm homepage badge]: https://img.shields.io/npm/v/@santi100/assertion-lib
[gh stars badge]: https://img.shields.io/github/stars/santi100a/assertion-lib.svg
[bundlephobia badge]: https://img.shields.io/bundlephobia/min/@santi100/assertion-lib
[discord badge]: https://img.shields.io/badge/Join%20us%20on%20Discord-7289DA?logo=discord&logoColor=white
[actions]: https://github.com/santi100a/assertion-lib/actions
[npm homepage]: https://npmjs.org/package/@santi100/assertion-lib
[repo]: https://github.com/santi100a/assertion-lib
[bundlephobia page]: https://bundlephobia.com/package/@santi100/assertion-lib@latest
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

- Via NPM: `npm install @santi100/assertion-lib`
- Via Yarn: `yarn add @santi100/assertion-lib`
- Via PNPM: `pnpm install @santi100/assertion-lib`

### API

**⚠ WARNING:** `assertType`'s documentation is no longer available here, as such function has been removed
from this library since version 2.0.0.

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

## Usage example

```typescript
import assertType = require('@santi100/assertion-lib/cjs/type'); // TypeScript for individual functions
import {
 assert,
 assertTypeOf,
 assertOneOf,
 assertInteger,
 assertMin,
 assertMax,
 AssertionError,
 Type
} from '@santi100/assertion-lib'; // ESM
const {
 assert,
 assertTypeOf,
 assertOneOf,
 assertInteger,
 assertMin,
 assertMax,
 AssertionError
} = require('@santi100/assertion-lib'); // CJS

function sum(a: number, b: number) {
 assertType(a, 'number');
 assertType(b, 'number');

 return a + b;
}

function divide(a: number, b: number) {
 assertType(a, 'number');
 assertType(b, 'number');
 assert(b !== 0, { expected: 'non-zero number', actual: b, operator: '!==' });

 return a / b;
}

function getGreeting(name: string, language: string) {
 assertType(name, 'string');
 assertOneOf(language, 'language', ['en', 'es']);

 const greetings = {
  en: 'Hello',
  es: 'Hola'
 };

 return `${greetings[language]}, ${name}!`;
}

function getFactorial(n: number) {
 assertType(n, 'number');
 assertInteger(n, 'n');
 assertMin(n, 'n', 0);

 let result = 1;
 for (let i = 2; i <= n; i++) {
  result *= i;
 }

 return result;
}

try {
 // Example of a failed assertion:
 assert(1 === 2);
} catch (error) {
 if (error instanceof AssertionError) {
  console.log('Expected:', error.expected); // 2
  console.log('Actual:', error.actual); // 1
  console.log('Operator:', error.operator); // '==='
 }
}


try {
 // Example of an assertion with custom error parameters:
 divide(10, 0);
} catch (error) {
 if (error instanceof AssertionError) {
  console.log(error.message); // 'Assertion failed! Expected non-zero number. Got 0 when using operator !==.'
 }
}

try {
 // Example of an assertion with one of:
 getGreeting('John', 'fr');
} catch (error) {
 if (error instanceof TypeError) {
  console.log(error.message); // '"language" must be one of "en, es". Got "fr" of type "string".'
 }
}

try {
 // Example of an integer assertion:
 getFactorial(3.5);
} catch (error) {
 if (error instanceof TypeError) {
  console.log(error.message); // '"n" must be an integer. Got "3.5" of type "number".'
 }
}

try {
 // Example of a minimum assertion:
 getFactorial(-1);
} catch (error) {
 if (error instanceof TypeError) {
  console.log(error.message); // '"n" must be bigger than 0. Got "-1" of type "number".'
 }
}

try {
 // Example of a maximum assertion:
 assertMax(10, 'n', 5);
} catch (error) {
 if (error instanceof TypeError) {
  console.log(error.message); // '"n" must be smaller than 5. Got "10" of type "number".'
 }
}
```
