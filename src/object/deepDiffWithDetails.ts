import { detailedDiff } from 'deep-object-diff';
import commonDeepFilter from '../common/commonDeepFilter';

const deepDiffWithDetails = (
  objA: object,
  objB: object,
  { keysToOmit = [], keysToPick = [] } = {}
): {
  added: object;
  updated: object;
  deleted: object;
} => {
  const [reducedObjA, reducedObjB] = commonDeepFilter(objA, objB, { keysToOmit, keysToPick });
  return detailedDiff(reducedObjA, reducedObjB);
};

export default deepDiffWithDetails;
