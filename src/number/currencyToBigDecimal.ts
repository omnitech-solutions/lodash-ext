import BN from 'bignumber.js';
import stripNonNumericCharacters from '../lang/stripNonNumericCharacters';

const BigNumber = BN.clone({ ROUNDING_MODE: BN.ROUND_DOWN });

const currencyToBigDecimal = ({
  currencyAmount,
  decimalPlaces = 2
}: {
  currencyAmount: string;
  decimalPlaces?: number;
}) => {
  const amount = stripNonNumericCharacters(currencyAmount);
  return new BigNumber(amount || 0.0).decimalPlaces(decimalPlaces).toNumber();
};

export default currencyToBigDecimal;
