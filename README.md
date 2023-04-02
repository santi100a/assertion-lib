# Santi's Assertion Library 

[![Build Status](https://github.com/santi100a/assertion-lib/actions/workflows/test.yml/badge.svg)](https://github.com/santi100a/assertion-lib/actions)
[![npm homepage](https://img.shields.io/npm/v/@santi100/assertion-lib)](https://npmjs.org/package/@santi100/assertion-lib)
[![GitHub stars](https://img.shields.io/github/stars/santi100a/assertion-lib.svg)](https://github.com/santi100a/assertion-lib)
[![License](https://img.shields.io/github/license/santi100a/assertion-lib.svg)](https://github.com/santi100a/assertion-lib)
[![Bundlephobia stats](https://img.shields.io/bundlephobia/min/@santi100/assertion-lib)](https://bundlephobia.com/package/@santi100/assertion-lib@latest)
- 🚀 Lightweight and fast^
- 👴 ES3-compliant*
- 💻 Portable between the browser and Node.js

**Hasn't been tested in an actual ES3 environment. Feel free to open an issue or pull request if you find any non-ES3 thing. See "Contribute" for instructions on how to do so.*

*^The source code is about 2 kilobytes.*

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

- `function assert(condition: boolean, { expected, actual, operator }?: AssertOptionalParams): void;`
Asserts that `condition` is truthy. Throws an `AssertionError` otherwise.

- `function assertType(val: unknown, expectedType: string): void;`
Asserts that the type of `val` is `expectedType`. Throws an `AssertionError` otherwise.

- `function assertTypeOf(arg: any, expectedType: Type, name: string): void;` (since 1.0.6)
Asserts that the type of `arg` is `expectedType`. Throws a `TypeError` otherwise.

- `function assertOneOf(arg: any, name: string, choices: any[]): void;` (since 1.0.6)
Asserts `arg` is one of `choices`.  Throws a `TypeError` otherwise.

- `function assertInteger(arg: number, name: string): void;` (since 1.0.6)
Asserts `arg` is an integer. Throws a `TypeError` otherwise.

- `function assertMin(arg: any, name: string, min: any): void;` (since 1.0.6)
Asserts `arg` is bigger or equal than `min`. Throws a `TypeError` otherwise.

- `function assertMax(arg: any, name: string, max: any): void;` (since 1.0.6)
Asserts `arg` is smaller or equal than `max`. Throws a `TypeError` otherwise.

- `function assertRange(arg: any, name: string, min: any, max: any): void;` (since 1.0.6)
Asserts `arg` is between `min + 1` and `max + 1` (inclusive). Throws a `TypeError` 
(`RangeError` since 1.0.7) otherwise.
- `function assertArray(arg: any, name?: string): void;` (since 1.0.7)
Asserts `arg` is an Array. Throws a `TypeError` otherwise.

## Usage example
```typescript
import {
  assert,
  assertType,
  assertTypeOf,
  assertOneOf,
  assertInteger,
  assertMin,
  assertMax,
  AssertionError,
  Type,
} from '@santi100/assertion-lib'; // ESM
const {
  assert,
  assertType,
  assertTypeOf,
  assertOneOf,
  assertInteger,
  assertMin,
  assertMax,
  AssertionError,
  Type,
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
    es: 'Hola',
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
  // Example of a type assertion:
  assertType('hello', 'number');
} catch (error) {
  if (error instanceof AssertionError) {
    console.log(error.message); // 'Assertion failed! Expected number. Got string when using operator typeof.'
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