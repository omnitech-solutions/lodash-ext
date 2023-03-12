import stripNonNumericCharacters from './stripNonNumericCharacters';

const isString = require('lodash/isString');
// eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
const _toNumber = require('lodash/toNumber');

const toNumber = (value: string) => {
  const number = isString(value) ? stripNonNumericCharacters(value) : value || '0.00';

  return _toNumber(number);
};

export default toNumber;
