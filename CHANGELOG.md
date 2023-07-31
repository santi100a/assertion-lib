# Changelog

## Version 1.0.6

- Added `assertTypeOf`, `assertOneOf`, `assertInteger`, `assertMin`, `assertMax` and `assertRange`.

## Version 1.0.7

- Modified `assertMax`, `assertMin` and `assertRange` to throw `RangeError`s instead of `TypeError`s.
- Added `assertArray`.

## Version 1.0.8

- Added `assertInstanceOf`, `assertMaxExclusive` and `assertMinExclusive`.
- Modified `randomFromArray` to make sure TypeScript enforces there's at least one element in the input array.

## Version 2.0.0 (MAJOR VERSION; BREAKING CHANGES!)

- **DELETED `assertType`.**
- **Replaced `assertOneOf`'s  `shallow` parameter with `comparator` to remove reliance on `@santi100/equal-lib`.**
- Modified module system to use `export =` for all individual module files, whilst keeping compatibility.

## Version 2.0.1

- Added `assertMatch` and `assertDefined`.
