import isDeepEquals from './isDeepEquals';
import { DeepKeysOptions } from '../common/types';

const isDeepDifferent = (objA: object, objB: object, { keysToOmit = [], keysToPick = [] }: DeepKeysOptions = {}) =>
  !isDeepEquals(objA, objB, { keysToOmit, keysToPick });

export default isDeepDifferent;
