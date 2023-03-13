import { isBlank, isPresent, stripNonNumericCharacters, toBoolean, toNumber } from '../src/index';

describe('exports', () => {
  describe('lang functions', () => {
    [isBlank, isPresent, stripNonNumericCharacters, toBoolean, toNumber].forEach((func) => {
      it(`${func.name} returns a function`, () => {
        expect(typeof func).toEqual('function');
      });
    });
  });
});
