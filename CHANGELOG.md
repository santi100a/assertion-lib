# Changelog

## Version 1.0.6

- Added `assertTypeOf`, `assertOneOf`, `assertInteger`, `assertMin`, `assertMax` and `assertRange`.

## Version 1.0.7

- Modified `assertMax`, `assertMin` and `assertRange` to throw `RangeError`s instead of `TypeError`s.
- Added `assertArray`.

## Version 1.0.8

- Added `assertInstanceOf`, `assertMaxExclusive` and `assertMinExclusive`.
- Modified `randomFromArray` to make sure TypeScript enforces there's at least one element in the input array.
