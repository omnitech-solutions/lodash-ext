import { expect } from 'chai';

import matchesSearchPaths from '../../src/object/matchesSearchPaths';

describe('matchesSearchPaths', () => {
  describe('with matching path', () => {
    ['a', 'a.ba'].forEach((path) => {
      it(`match found for path: ${path}`, () => {
        expect(matchesSearchPaths(path, ['a'])).to.eql(true);
      });
    });
  });

  describe('with no matching path', () => {
    ['aa', 'b', 'aa.a'].forEach((path) => {
      it(`match found for path: ${path}`, () => {
        expect(matchesSearchPaths(path, ['a'])).to.eql(false);
      });
    });
  });
});
