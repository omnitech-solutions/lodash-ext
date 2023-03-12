const isArray = require('lodash/isArray');
const isString = require('lodash/isString');

const trim = (strOrList: string | Array<string>) => {
  if (isArray(strOrList)) {
    // @ts-ignore
    return strOrList.map((str: string) => trim(str));
  }

  if (isString(strOrList)) {
    // @ts-ignore
    return strOrList?.trim();
  }
  return strOrList;
};

export default trim;
