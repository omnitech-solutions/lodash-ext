import { isString } from 'lodash';
import stripThousandSeparators from './stripThousandSeparators';

const CURRENCY_SYMBOL_MATCH_REGEX = /(\s?[£€\\$]|KD)\s?/;

const removeUnsupportedCurrencyCharacters = (value: string) =>
  isString(value) ? stripThousandSeparators(value.replace(CURRENCY_SYMBOL_MATCH_REGEX, '')) : value;

export default removeUnsupportedCurrencyCharacters;
