import { isNil, isString, isEmpty, isNumber, isObject } from 'lodash';

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
