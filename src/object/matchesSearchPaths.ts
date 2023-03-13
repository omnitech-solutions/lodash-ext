import { isRegExp } from 'lodash';

import isPresent from '../lang/isPresent';

export const searchInPathRegex = (search: string) => new RegExp(`^\\b${search}\\b`);

const matchesSearchPaths = (path: string, pathsToSearch: Array<string>) => {
  const matches = pathsToSearch.filter(
    (search) => (isRegExp(search) && search.test(path)) || path.match(searchInPathRegex(search))
  );

  return isPresent(matches);
};

export default matchesSearchPaths;
