const isNil = require('lodash/isNil');
const isBoolean = require('lodash/isBoolean');
const isString = require('lodash/isString');

const toBoolean = (bool: boolean | string | null) => {
  const truthyValues = ['1', 'yes', 'true'];
  const falseyValues = ['0', 'no', 'false', ''];

  if (isBoolean(bool)) {
    return bool;
  }

  if (isNil(bool)) return false;

  const isStringType = isString(bool);
  // @ts-ignore
  if (isStringType && truthyValues.includes(bool.toLowerCase().trim())) return true;
  // @ts-ignore
  if (isStringType && falseyValues.includes(bool.toLowerCase().trim())) return false;

  return bool;
};

export default toBoolean;
