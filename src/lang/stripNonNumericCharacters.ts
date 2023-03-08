const isString = require('lodash/isString');

const stripNonNumericCharacters = (value: string) => {
  if (!isString(value)) return value;

  const NON_NUMBER_REGEX = /[^0-9.\\+-]/g;

  return value.replace(NON_NUMBER_REGEX, '');
};

export default stripNonNumericCharacters;
