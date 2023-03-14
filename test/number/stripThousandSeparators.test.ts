import stripThousandSeparators from '../../src/number/stripThousandSeparators';

describe('stripThousandSeparators', () => {
  it('removes any non numeral characters', () => {
    expect(stripThousandSeparators('$1,000,000.56999')).toEqual('$1000000.56999');
  });
});
