import { expect } from 'chai';

import convertNumericShortcuts from '../../src/number/convertNumericShortcuts';

describe('convertNumericShortcuts', () => {
  it('handles k m b t values', () => {
    expect(convertNumericShortcuts('1k')).to.eql(1e3);
    expect(convertNumericShortcuts('1100k')).to.eql(11e5);
    expect(convertNumericShortcuts('1,100k')).to.eql(11e5);
    expect(convertNumericShortcuts('1100k.56')).to.eql(1100000.56);
    expect(convertNumericShortcuts('1m')).to.eql(1e6);
    expect(convertNumericShortcuts('1.5m')).to.eql(15e5);
    expect(convertNumericShortcuts('1.5m3232.56')).to.eql(15000003232.56);
    expect(convertNumericShortcuts('.5m')).to.eql(5e5);
    expect(convertNumericShortcuts('122m2332.56')).to.eql(1220000002332.56);
    expect(convertNumericShortcuts('.m343')).to.eql('.m343');
    expect(convertNumericShortcuts('1b')).to.eql(1e9);
    expect(convertNumericShortcuts('1t')).to.eql(1e12);
  });
});
