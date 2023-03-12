import {isBlank, isPresent, stripNonNumericCharacters, toBoolean, toNumber} from '../../src/lang/index'

describe('exports', () => {
    [isBlank, isPresent, stripNonNumericCharacters, toBoolean, toNumber].forEach((func) => {
        it(`${func.name} returns a function`, () => {
            expect(typeof func).toEqual('function')
        })
    })
});
