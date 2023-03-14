import { expect } from 'chai';

import stripNonNumericCharacters from '../../src/lang/stripNonNumericCharacters';

describe('stripNonNumericCharacters', () => {
  it('removes non numeric values', () => {
    expect(stripNonNumericCharacters('1.333')).to.eql('1.333');
    expect(stripNonNumericCharacters('1.33ab3')).to.eql('1.333');
    expect(stripNonNumericCharacters('1,000,000')).to.eql('1000000');
  });
});
