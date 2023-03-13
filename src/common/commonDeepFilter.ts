import isPresent from '../lang/isPresent';
import dottedPick from '../object/dottedPick';
import dottedOmit from '../object/dottedOmit';
import { DeepKeysOptions } from './types';

const commonDeepFilter = (
  objA: object,
  objB: object,
  { keysToOmit = [], keysToPick = [] }: DeepKeysOptions = {}
): [object, object] => {
  const pickedObjA = isPresent(keysToPick) ? dottedPick(objA, keysToPick) : objA;
  const pickedObjB = isPresent(keysToPick) ? dottedPick(objB, keysToPick) : objB;

  const reducedObjA = isPresent(keysToOmit) ? dottedOmit(pickedObjA, keysToOmit) : pickedObjA;
  const reducedObjB = isPresent(keysToOmit) ? dottedOmit(pickedObjB, keysToOmit) : pickedObjB;

  return [reducedObjA, reducedObjB];
};

export default commonDeepFilter;
