import {
  omit,
  omitIndex,
  isDeepEquals,
  isDeepDifferent,
  isBlank,
  isEmail,
  isPresent,
  isUrl,
  pickIfHasPaths,
  stripNonNumericCharacters,
  toBoolean,
  toEnum,
  toMatrix,
  toNumber,
  deepDiff,
  deepDiffWithDetails,
  dot,
  dottedKeys,
  dottedOmit,
  dottedPick,
  matchesSearchPaths,
  undot,
  capitalize,
  replaceAll,
  titleize,
  trim
} from '../src/index';

describe('exports', () => {
  describe('lang functions', () => {
    [
      omit,
      omitIndex,
      isDeepEquals,
      isDeepDifferent,
      isBlank,
      isEmail,
      isPresent,
      isUrl,
      pickIfHasPaths,
      stripNonNumericCharacters,
      toBoolean,
      toEnum,
      toMatrix,
      toNumber,
      deepDiff,
      deepDiffWithDetails,
      dot,
      dottedKeys,
      dottedOmit,
      dottedPick,
      matchesSearchPaths,
      undot,
      capitalize,
      replaceAll,
      titleize,
      trim
    ].forEach((func) => {
      it(`${func.name} returns a function`, () => {
        expect(typeof func).toEqual('function');
      });
    });
  });
});
