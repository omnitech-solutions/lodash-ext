import { diff as deepObjectDiff } from 'deep-object-diff';
import commonDeepFilter from '../common/commonDeepFilter';
import { DeepKeysOptions } from '../common/types';

const deepDiff = (objA: object, objB: object, { keysToPick = [], keysToOmit = [] }: DeepKeysOptions = {}): object => {
  const [filteredObjA, filteredObjB] = commonDeepFilter(objA, objB, { keysToPick, keysToOmit });

  return deepObjectDiff(filteredObjA, filteredObjB);
};

export default deepDiff;
