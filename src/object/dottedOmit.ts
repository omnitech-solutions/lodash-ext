import { cloneDeep } from 'lodash';
import dottedKeys from './dottedKeys';
import matchesSearchPaths from './matchesSearchPaths';
import { rejectObject } from '../common/objelity';
import dot from './dot';

const dottedOmit = (obj: object, keys: Array<string>) => {
  const objPaths = dottedKeys(dot(obj));
  const pathsToOmit = objPaths
    .filter((path) => keys.includes(path) || matchesSearchPaths(path, keys))
    .map((path) =>
      path
        .split(/\[(\d+)]/g)
        .join('.')
        .replace(/\.\./g, '.')
        .replace(/\.$/, '')
    );

  return rejectObject(cloneDeep(obj), pathsToOmit);
};

export default dottedOmit;
