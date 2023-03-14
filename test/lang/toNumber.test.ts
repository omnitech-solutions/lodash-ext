import { expect } from 'chai';

import toNumber from '../../src/lang/toNumber';

describe('toNumber', () => {
  it('converts values to numbers', () => {
    expect(toNumber('250000')).to.eql(250000.0);
    expect(toNumber('$250,000')).to.eql(250000.0);
    expect(toNumber('$250,000.00')).to.eql(250000.0);
    expect(toNumber('£250,000.00')).to.eql(250000.0);
    expect(toNumber('  true  ')).to.eql(0);
    expect(toNumber('true')).to.eql(0);
    // @ts-ignore
    expect(toNumber(true)).to.eql(1);
    expect(toNumber('  false  ')).to.eql(0);
    expect(toNumber('false')).to.eql(0);
    // @ts-ignore
    expect(toNumber(false)).to.eql(0);
    expect(toNumber('adsklj')).to.eql(0);
    // @ts-ignore
    expect(toNumber(undefined)).to.eql(0);
    // @ts-ignore
    expect(toNumber({})).to.eql(NaN);
    // @ts-ignore
    expect(toNumber([])).to.eql(0);
  });
});
