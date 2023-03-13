import { uniq } from 'lodash';

import dot from './dot';

const dottedKeys = (obj: object, { ignoreArrayIndexKeys = false, separator = '.', useBrackets = false } = {}) => {
  const keys = Object.keys(dot(obj, { separator, useBrackets }));

  return uniq(keys.map((dottedKey) => (ignoreArrayIndexKeys ? dottedKey.replace(/\.[0-9]/g, '.*') : dottedKey)));
};

export default dottedKeys;
