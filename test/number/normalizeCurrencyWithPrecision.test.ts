import normalizeCurrencyWithPrecision from '../../src/number/normalizeCurrencyWithPrecision';

import { GBP, KWD } from '../../src/data/currencies';

describe('normalizeCurrencyWithPrecision', () => {
  it('can normalize currency values to numerics', () => {
    expect(normalizeCurrencyWithPrecision('84156')).toEqual('84156');
    expect(normalizeCurrencyWithPrecision('84156.')).toEqual('84156.');
    expect(normalizeCurrencyWithPrecision('84156.6')).toEqual('84156.6');
    expect(normalizeCurrencyWithPrecision('84156.68')).toEqual('84156.68');
    expect(normalizeCurrencyWithPrecision('84156.689')).toEqual('84156.68');
    expect(normalizeCurrencyWithPrecision('')).toEqual('');
    // @ts-ignore
    expect(normalizeCurrencyWithPrecision(1)).toEqual('1');
    // @ts-ignore
    expect(normalizeCurrencyWithPrecision(0)).toEqual('');
    expect(normalizeCurrencyWithPrecision('.5')).toEqual('.5');
    expect(normalizeCurrencyWithPrecision('.25')).toEqual('.25');
    expect(normalizeCurrencyWithPrecision('.256')).toEqual('.25');

    expect(normalizeCurrencyWithPrecision('1k')).toEqual(1e3);
    expect(normalizeCurrencyWithPrecision('1100k')).toEqual(11e5);
    expect(normalizeCurrencyWithPrecision('1100k.56')).toEqual(1100000.56);
    expect(normalizeCurrencyWithPrecision('1,100k.56')).toEqual(1100000.56);
    expect(normalizeCurrencyWithPrecision('1m')).toEqual(1e6);
    expect(normalizeCurrencyWithPrecision('1.5m')).toEqual(1500000);
    expect(normalizeCurrencyWithPrecision('1b')).toEqual(1e9);
    expect(normalizeCurrencyWithPrecision('1t')).toEqual(1e12);
  });

  it('uses USD precision by default', () => {
    expect(normalizeCurrencyWithPrecision('84156.68')).toEqual('84156.68');
  });

  it('supports other currency precision if they are passed in', () => {
    expect(normalizeCurrencyWithPrecision('$84,156.68', GBP)).toEqual('84156.68');
    expect(normalizeCurrencyWithPrecision('KD 84,156.105', KWD)).toEqual('84156.105');
    expect(normalizeCurrencyWithPrecision('KD 123.400', KWD)).toEqual('123.400');
    expect(normalizeCurrencyWithPrecision('KD 35,000.654', KWD)).toEqual('35000.654');
  });
});
