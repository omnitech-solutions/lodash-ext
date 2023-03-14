import { expect } from 'chai';

import normalizeCurrencyWithPrecision from '../../src/number/normalizeCurrencyWithPrecision';

import { GBP, KWD } from '../../src/data/currencies';

describe('normalizeCurrencyWithPrecision', () => {
  it('can normalize currency values to numerics', () => {
    expect(normalizeCurrencyWithPrecision('84156')).to.eql('84156');
    expect(normalizeCurrencyWithPrecision('84156.')).to.eql('84156.');
    expect(normalizeCurrencyWithPrecision('84156.6')).to.eql('84156.6');
    expect(normalizeCurrencyWithPrecision('84156.68')).to.eql('84156.68');
    expect(normalizeCurrencyWithPrecision('84156.689')).to.eql('84156.68');
    expect(normalizeCurrencyWithPrecision('')).to.eql('');
    // @ts-ignore
    expect(normalizeCurrencyWithPrecision(1)).to.eql('1');
    // @ts-ignore
    expect(normalizeCurrencyWithPrecision(0)).to.eql('');
    expect(normalizeCurrencyWithPrecision('.5')).to.eql('.5');
    expect(normalizeCurrencyWithPrecision('.25')).to.eql('.25');
    expect(normalizeCurrencyWithPrecision('.256')).to.eql('.25');

    expect(normalizeCurrencyWithPrecision('1k')).to.eql(1e3);
    expect(normalizeCurrencyWithPrecision('1100k')).to.eql(11e5);
    expect(normalizeCurrencyWithPrecision('1100k.56')).to.eql(1100000.56);
    expect(normalizeCurrencyWithPrecision('1,100k.56')).to.eql(1100000.56);
    expect(normalizeCurrencyWithPrecision('1m')).to.eql(1e6);
    expect(normalizeCurrencyWithPrecision('1.5m')).to.eql(1500000);
    expect(normalizeCurrencyWithPrecision('1b')).to.eql(1e9);
    expect(normalizeCurrencyWithPrecision('1t')).to.eql(1e12);
  });

  it('uses USD precision by default', () => {
    expect(normalizeCurrencyWithPrecision('84156.68')).to.eql('84156.68');
  });

  it('supports other currency precision if they are passed in', () => {
    expect(normalizeCurrencyWithPrecision('$84,156.68', GBP)).to.eql('84156.68');
    expect(normalizeCurrencyWithPrecision('KD 84,156.105', KWD)).to.eql('84156.105');
    expect(normalizeCurrencyWithPrecision('KD 123.400', KWD)).to.eql('123.400');
    expect(normalizeCurrencyWithPrecision('KD 35,000.654', KWD)).to.eql('35000.654');
  });
});
