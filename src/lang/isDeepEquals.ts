import commonDeepFilter from '../common/commonDeepFilter';
import { DeepKeysOptions } from '../common/types';

const isEqual = require('fast-deep-equal');

const isDeepEquals = (objA: object, objB: object, { keysToPick = [], keysToOmit = [] }: DeepKeysOptions = {}) => {
  const [filteredObjA, filteredObjB] = commonDeepFilter(objA, objB, { keysToOmit, keysToPick });

  return isEqual(filteredObjA, filteredObjB);
};

export default isDeepEquals;
