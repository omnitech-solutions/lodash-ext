import { expect } from 'chai';

import pickIfHasPaths from '../../src/lang/pickIfHasPaths';

describe('pickIfHasPaths', () => {
  describe('with matching paths', () => {
    it('returns picked paths', () => {
      expect(pickIfHasPaths({ a: 1, b: 2 }, ['a'])).to.eql({ a: 1 });
    });
  });

  describe('without matching paths', () => {
    it('returns picked paths', () => {
      expect(pickIfHasPaths({ a: 1, b: 2 }, ['c'])).to.eql({});
      expect(pickIfHasPaths({ a: 1, b: 2 }, [])).to.eql({ a: 1, b: 2 });
    });
  });
});
