import { pick } from 'lodash';
import dottedKeys from './dottedKeys';
import matchesSearchPaths from './matchesSearchPaths';

const dottedPick = (obj: object, keys: Array<string>) => {
  const objPaths = dottedKeys(obj);

  const pathsToKeep = objPaths.filter((path) => keys.includes(path) || matchesSearchPaths(path, keys));
  return pick({ ...obj }, pathsToKeep);
};

export default dottedPick;
