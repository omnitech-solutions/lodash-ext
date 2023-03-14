import {
  convertNumericShortcuts,
  currencyFormatter,
  currencyNormalizer,
  currencyToBigDecimal,
  normalizeCurrencyWithPrecision,
  removeUnsupportedCurrencyCharacters,
  stripThousandSeparators
} from '../../src/number/index';

describe('exports', () => {
  [
    convertNumericShortcuts,
    currencyFormatter,
    currencyNormalizer,
    currencyToBigDecimal,
    normalizeCurrencyWithPrecision,
    removeUnsupportedCurrencyCharacters,
    stripThousandSeparators
  ].forEach((func) => {
    it(`${func.name} returns a function`, () => {
      expect(typeof func).toEqual('function');
    });
  });
});
