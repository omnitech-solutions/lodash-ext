const isNil = require('lodash/isNil');
const isString = require('lodash/isString');
const isEmpty = require('lodash/isEmpty');
const isNumber = require('lodash/isNumber');
const isObject = require('lodash/isObject');

const isBlank = (arg: string | null | number | object) => {
  if (isNil(arg)) return true;
  if (isString(arg)) {
    // @ts-ignore
    return isEmpty(arg?.trim());
  }
  if (isNumber(arg)) return arg === 0;
  if (isObject(arg)) return isEmpty(arg);
  return false;
};

export default isBlank;
