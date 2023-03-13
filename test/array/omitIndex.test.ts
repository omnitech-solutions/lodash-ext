import omitIndex from '../../src/array/omitIndex';

describe('omitIndex', () => {
  it('removes value at given index', () => {
    expect(omitIndex([1, 2, 3, 4], 0)).toEqual([2, 3, 4]);
    expect(omitIndex([1, 2, 3, 4], 2)).toEqual([1, 2, 4]);
  });
});
