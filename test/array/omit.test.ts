import { expect } from 'chai';
import omit from '../../src/array/omit';

describe('omit', () => {
  it('handles removing multiple matching values', () => {
    expect(omit([1, 2, 3, 4], [2, 4])).to.eql([1, 3]);
  });
});
