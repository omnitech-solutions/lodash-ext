import { expect } from 'chai';

import currencyNormalizer from '../../src/number/currencyNormalizer';

describe('currencyNormalizer', () => {
  it('should format a valid input string to a currency value with four decimal places', () => {
    expect(currencyNormalizer('12345')).to.eql('12345.0');
    expect(currencyNormalizer('12.345')).to.eql('12.345');
    expect(currencyNormalizer('1,234.5678')).to.eql('1234.5678');
  });

  it('should return an empty string for invalid input', () => {
    expect(currencyNormalizer('')).to.eql('');
    expect(currencyNormalizer(null)).to.eql('');
    expect(currencyNormalizer(undefined)).to.eql('');
    expect(currencyNormalizer('abc')).to.eql('');
  });
});
