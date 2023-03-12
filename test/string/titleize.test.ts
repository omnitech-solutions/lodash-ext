import titleize from '../../src/string/titleize';

describe('titleize', () => {
  it('returns true with blank values', () => {
    expect(titleize('something to say')).toEqual('Something to Say');
  });
});
