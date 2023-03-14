import { expect } from 'chai';

import currencyToBigDecimal from '../../src/number/currencyToBigDecimal';

describe('currencyToBigDecimal', () => {
  it('removes any non numeral characters', () => {
    expect(currencyToBigDecimal({ currencyAmount: '$1,000,000.56999' })).to.eql(1000000.56);
  });
});
