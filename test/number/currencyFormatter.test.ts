import { expect } from 'chai';

import currencyFormatter from '../../src/number/currencyFormatter';

describe('currencyFormatter', () => {
  it('can format a currency correctly', () => {
    expect(currencyFormatter('84156.68')).to.eql('$84,156.68');
  });

  it('uses USD by default', () => {
    expect(currencyFormatter('84156.68')).to.eql('$84,156.68');
  });

  it('supports other currencies if they are passed in', () => {
    expect(currencyFormatter('84156.68', 'GBP')).to.eql('£84,156.68');
    expect(currencyFormatter('84156.105', 'KWD')).to.eql('KD 84,156.105');
    expect(currencyFormatter('123.4', 'KWD')).to.eql('KD 123.400');
    expect(currencyFormatter('35,000.654', 'KWD')).to.eql('KD 35,000.654');
  });
});
