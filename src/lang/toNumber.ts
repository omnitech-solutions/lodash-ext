import { isString, toNumber as _toNumber } from 'lodash';
import stripNonNumericCharacters from './stripNonNumericCharacters';

const toNumber = (value: string) => {
  const number = isString(value) ? stripNonNumericCharacters(value) : value || '0.00';

  return _toNumber(number);
};

export default toNumber;
