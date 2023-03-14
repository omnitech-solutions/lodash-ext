import { expect } from 'chai';

import isPresent from '../../src/lang/isPresent';

describe('isPresent', () => {
  it('returns false with blank values', () => {
    ['', '  ', null, {}, 0].forEach((val) => {
      expect(isPresent(val)).to.be.false;
    });
  });

  it('returns true with non blank values', () => {
    ['1', ' a ', { a: 1 }, 1].forEach((val) => {
      expect(isPresent(val)).to.be.true;
    });
  });
});
