import { expect } from 'chai';

import removeUnsupportedCurrencyCharacters from '../../src/number/removeUnsupportedCurrencyCharacters';

describe('removeUnsupportedCurrencyCharacters', () => {
  it('should remove the currency symbol and any whitespace around it', () => {
    expect(removeUnsupportedCurrencyCharacters('$ 1,000.50')).to.eql('1000.50');
    expect(removeUnsupportedCurrencyCharacters('£ 2.75')).to.eql('2.75');
    expect(removeUnsupportedCurrencyCharacters('KD 20,000.00')).to.eql('20000.00');
  });

  it('should remove only the first currency symbol', () => {
    expect(removeUnsupportedCurrencyCharacters('$ 1,000.50 $')).to.eql('1000.50 $');
    expect(removeUnsupportedCurrencyCharacters('£ 2.75 € 3.25')).to.eql('2.75 € 3.25');
  });

  it('should not modify input with no currency symbol', () => {
    expect(removeUnsupportedCurrencyCharacters('123.45')).to.eql('123.45');
    expect(removeUnsupportedCurrencyCharacters('1,234,567.89')).to.eql('1234567.89');
  });

  it('should return an empty string for invalid input', () => {
    expect(removeUnsupportedCurrencyCharacters('')).to.eql('');
    // @ts-ignore
    expect(removeUnsupportedCurrencyCharacters(null)).to.eql(null);
    // @ts-ignore
    expect(removeUnsupportedCurrencyCharacters(undefined)).to.eql(undefined);
    // @ts-ignore
    expect(removeUnsupportedCurrencyCharacters(123)).to.eql(123);
    // @ts-ignore
    expect(removeUnsupportedCurrencyCharacters({ amount: 50 })).to.eql({ amount: 50 });
  });
});
