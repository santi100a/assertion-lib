const { assert, assertType } = require('../cjs/index.js');

describe('assertion-lib tests', function() {
    test('assert doesn\'t throw an error if the condition is true', function() {
        assert(true);
        try {
            assert(false);
        } catch (e) {
            expect(e instanceof Error)
                .toBe(true);
        }
    });
    test('assertType doesn\'t throw an error if the condition is true', function() {
        assertType(true, 'boolean');
        try {
            assert(false, 'number');
        } catch (e) {
            expect(e instanceof Error)
                .toBe(true);
        }
    });
});