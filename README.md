# Santi's Assertion Library (JavaScript)

This is an assertion library for types and conditions. It's designed to be lightweight and portable between
the browser and Node.js.

**Keep in mind the source code uses class definitions, so this library only works on environments that support ES6 or higher for now. I'm striving to install a transpiler like Babel to convert my code to ES3.**

## Usage
### Installation
Run ```npm install @santi100/assertion-lib```, ```yarn add @santi100/assertion-lib```, or ```pnpm install @santi100/assertion-lib```, depending on what package manager you use in your project.

This library already comes with built-in TypeScript definitions.
### Exported Members

```typescript
assert(condition: boolean, { expected, actual, operator }?: AssertOptionalParams): void;
``` 
Asserts that ```condition``` is truthy. Throws an ```AssertionError``` otherwise.

```typescript
assertType(val: unknown, expectedType: string): void;
``` 
Asserts that the type of ```val``` is ```expectedType```. Throws an ```AssertionError``` otherwise.