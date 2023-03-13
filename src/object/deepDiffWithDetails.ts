import { detailedDiff } from 'deep-object-diff';
import commonDeepFilter from '../common/commonDeepFilter';
import { DeepKeysOptions } from '../common/types';

const deepDiffWithDetails = (
  objA: object,
  objB: object,
  { keysToOmit = [], keysToPick = [] }: DeepKeysOptions = {}
) => {
  const [reducedObjA, reducedObjB] = commonDeepFilter(objA, objB, { keysToOmit, keysToPick });
  return detailedDiff(reducedObjA, reducedObjB);
};

export default deepDiffWithDetails;
