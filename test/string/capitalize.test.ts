import capitalize from '../../src/string/capitalize';

describe('capitalize', () => {
  it('removes spaces between', () => {
    expect(capitalize('abc def')).toEqual('Abc def');
  });
});
