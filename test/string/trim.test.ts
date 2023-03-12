import trim from '../../src/string/trim';

describe('trim', () => {
  it('removes spaces between', () => {
    expect(trim('   ')).toEqual('');
    expect(trim(' abc  ')).toEqual('abc');
    expect(trim(['', '   ', 'abc'])).toEqual(['', '', 'abc']);
    expect(trim([' abc ', '     abc   '])).toEqual(['abc', 'abc']);
  });
});
