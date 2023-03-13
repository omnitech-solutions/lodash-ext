import {
  deepEquals,
  isBlank,
  isEmail,
  isPresent,
  isUrl,
  pickIfHasPaths,
  stripNonNumericCharacters,
  toBoolean,
  toEnum,
  toMatrix,
  toNumber
} from '../../src/lang/index';

describe('exports', () => {
  [
    deepEquals,
    isBlank,
    isEmail,
    isPresent,
    isUrl,
    pickIfHasPaths,
    stripNonNumericCharacters,
    toBoolean,
    toEnum,
    toMatrix,
    toNumber
  ].forEach((func) => {
    it(`${func.name} returns a function`, () => {
      expect(typeof func).toEqual('function');
    });
  });
});
