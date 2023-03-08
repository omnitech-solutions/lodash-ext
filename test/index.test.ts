import {isBlank, isPresent, stripNonNumericCharacters, toBoolean, toNumber} from '../src/index'

describe('exports', function () {
    describe('lang functions', function () {
        [isBlank, isPresent, stripNonNumericCharacters, toBoolean, toNumber].forEach((func) => {
            it(`${func.name} returns a function`, () => {
                expect(typeof func).toEqual('function')
            })
        })
    });
});