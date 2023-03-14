import currencyToBigDecimal from '../../src/number/currencyToBigDecimal';

describe('currencyToBigDecimal', () => {
  it('removes any non numeral characters', () => {
    expect(currencyToBigDecimal({ currencyAmount: '$1,000,000.56999' })).toEqual(1000000.56);
  });
});
