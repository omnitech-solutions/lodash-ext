import { expect } from 'chai';

import trim from '../../src/string/trim';

describe('trim', () => {
  it('removes spaces between', () => {
    expect(trim('   ')).to.eql('');
    expect(trim(' abc  ')).to.eql('abc');
    expect(trim(['', '   ', 'abc'])).to.eql(['', '', 'abc']);
    expect(trim([' abc ', '     abc   '])).to.eql(['abc', 'abc']);
  });
});
