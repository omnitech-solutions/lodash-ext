import { get, isNumber } from 'lodash';
import isBlank from '../lang/isBlank';
import removeUnsupportedCurrencyCharacters from './removeUnsupportedCurrencyCharacters';
import convertNumericShortcuts, { NUMERIC_SHORTCUT_MATCH_REGEX } from './convertNumericShortcuts';
import stripNonNumericCharacters from '../lang/stripNonNumericCharacters';

import { USD } from '../data/currencies';

const normalizeCurrencyWithPrecision = (_value = '', precisionOrCurrency = USD) => {
  if (isBlank(_value)) return '';

  const value = removeUnsupportedCurrencyCharacters(_value);
  const precision = get(precisionOrCurrency, 'precision', precisionOrCurrency);

  if (NUMERIC_SHORTCUT_MATCH_REGEX.test(value)) {
    // @ts-ignore
    return convertNumericShortcuts(value, precision);
  }

  const number = isNumber(value) ? String(value) : stripNonNumericCharacters(value) || '';

  const [unit = '', places = ''] = number.split('.');

  if (places.length <= precision) return number;

  // @ts-ignore
  const truncatedPlaces = places.substring(0, precision);
  return [unit, truncatedPlaces].join('.');
};

export default normalizeCurrencyWithPrecision;
