import { isArray, isString } from 'lodash';

const trim = (strOrList: string | Array<string>): string | Array<string> => {
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
