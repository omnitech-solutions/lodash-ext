import { compact } from 'lodash';
import currencyNormalizer from './currencyNormalizer';
import stripThousandSeparators from './stripThousandSeparators';
import currencyToBigDecimal from './currencyToBigDecimal';

export const NUMERIC_SHORTCUT_MATCH_REGEX = /^(\d?\.?\d+[kmbt])(\d*(\.\d+))?/;

const normalizedShortcutAmount = (value: string) => {
  const matches = compact(value.match(NUMERIC_SHORTCUT_MATCH_REGEX) || []);

  const [amountWithShortcut, leftoverAmount] = matches.length < 3 ? [matches[0], ''] : matches.slice(1, 3);

  const unit = currencyNormalizer(amountWithShortcut).split('.')[0];
  return `${unit}${leftoverAmount}`;
};

const convertNumericShortcuts = (val: string, precision?: number) => {
  const value = stripThousandSeparators(val);
  if (!NUMERIC_SHORTCUT_MATCH_REGEX.test(value)) return value;
  const normalizedValue = normalizedShortcutAmount(value);

  return currencyToBigDecimal({
    currencyAmount: normalizedValue,
    decimalPlaces: precision
  });
};

export default convertNumericShortcuts;
