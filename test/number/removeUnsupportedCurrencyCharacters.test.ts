import removeUnsupportedCurrencyCharacters from '../../src/number/removeUnsupportedCurrencyCharacters';

describe('removeUnsupportedCurrencyCharacters', () => {
  it('should remove the currency symbol and any whitespace around it', () => {
    expect(removeUnsupportedCurrencyCharacters('$ 1,000.50')).toEqual('1000.50');
    expect(removeUnsupportedCurrencyCharacters('£ 2.75')).toEqual('2.75');
    expect(removeUnsupportedCurrencyCharacters('KD 20,000.00')).toEqual('20000.00');
  });

  it('should remove only the first currency symbol', () => {
    expect(removeUnsupportedCurrencyCharacters('$ 1,000.50 $')).toEqual('1000.50 $');
    expect(removeUnsupportedCurrencyCharacters('£ 2.75 € 3.25')).toEqual('2.75 € 3.25');
  });

  it('should not modify input with no currency symbol', () => {
    expect(removeUnsupportedCurrencyCharacters('123.45')).toEqual('123.45');
    expect(removeUnsupportedCurrencyCharacters('1,234,567.89')).toEqual('1234567.89');
  });

  it('should return an empty string for invalid input', () => {
    expect(removeUnsupportedCurrencyCharacters('')).toEqual('');
    // @ts-ignore
    expect(removeUnsupportedCurrencyCharacters(null)).toEqual(null);
    // @ts-ignore
    expect(removeUnsupportedCurrencyCharacters(undefined)).toEqual(undefined);
    // @ts-ignore
    expect(removeUnsupportedCurrencyCharacters(123)).toEqual(123);
    // @ts-ignore
    expect(removeUnsupportedCurrencyCharacters({ amount: 50 })).toEqual({ amount: 50 });
  });
});
