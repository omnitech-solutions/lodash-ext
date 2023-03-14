import { expect } from 'chai';

import omitIndex from '../../src/array/omitIndex';

describe('omitIndex', () => {
  it('removes value at given index', () => {
    expect(omitIndex([1, 2, 3, 4], 0)).to.eql([2, 3, 4]);
    expect(omitIndex([1, 2, 3, 4], 2)).to.eql([1, 2, 4]);
  });
});
