import { isEqual } from 'lodash';
import pickIfHasPaths from './pickIfHasPaths';
import isPresent from './isPresent';

const deepEquals = (a: object, b: object, keysToPick: Array<string> = []): boolean => {
  const pickKeys = isPresent(keysToPick);
  const filteredA = pickKeys ? pickIfHasPaths(a, keysToPick) : a;
  const filteredB = pickKeys ? pickIfHasPaths(b, keysToPick) : b;

  return isEqual(filteredA, filteredB);
};

export default deepEquals;
