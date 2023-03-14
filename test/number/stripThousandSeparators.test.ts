import { expect } from 'chai';

import stripThousandSeparators from '../../src/number/stripThousandSeparators';

describe('stripThousandSeparators', () => {
  it('removes any non numeral characters', () => {
    expect(stripThousandSeparators('$1,000,000.56999')).to.eql('$1000000.56999');
  });
});
