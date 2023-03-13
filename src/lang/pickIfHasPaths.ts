import { isPlainObject, isArray, isEmpty, pick } from 'lodash';

const pickIfHasPaths = (object: object, paths: Array<string>) => {
  if (!isPlainObject(object)) return object;

  const tmpPaths = isArray(paths) ? paths : [paths];
  if (isEmpty(tmpPaths)) return { ...object };

  return pick(object, tmpPaths);
};

export default pickIfHasPaths;
