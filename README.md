# Santi's Assertion Library (JavaScript)

This is an assertion library that asserts types and conditions.

## Usage

### Importing from a JavaScript File

#### Via NPM 
Import ```@santi100/assertion-lib``` (for ESM) or ```@santi100/assertion-lib/cjs``` (for CJS).
#### Via Source Control 

Import ```./assertion-lib/index.js``` (ESM) or ```./assertion-lib/cjs/index.js``` (CJS).

### Installation

#### Via NPM

- Run ```npm install @santi100/assertion-lib```, ```yarn add @santi100/assertion-lib```, or ```pnpm install @santi100/assertion-lib```, depending on what package manager you use in your project.

#### Via Source Control

- Run ```git clone https://github.com/santi100a/assertion-lib```.
- Enter the directory and run ```npm install```, ```yarn install```, or ```pnpm install``` to install dependencies.

### Exported Members

```assert(condition: boolean, { expected, actual, operator }?: AssertOptionalParams): void;``` Asserts that ```condition``` is truthy. Throws a (custom) ```AssertionError``` otherwise.

```assertType(val: unknown, expectedType: string): void;``` Asserts that the type of ```val``` is ```expectedType```. Throws an ```AssertionError``` otherwise.