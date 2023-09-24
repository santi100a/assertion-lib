import { AssertOptionalParams } from './core';
/**
 * Asserts that `condition` is truthy.
 * Throws an {@link AssertionError} otherwise.
 *
 * @param condition A boolean condition to assert.
 * @param errorParams Parameters for the {@link AssertionError} that will be thrown in case the condition is falsy.
 */
declare function assert(condition: boolean, errorParams?: AssertOptionalParams<true, boolean>): void;
declare namespace assert {
    var assert: typeof import("./assert");
}
export = assert;
