import convertNumericShortcuts from '../../src/number/convertNumericShortcuts';

describe('convertNumericShortcuts', () => {
  it('handles k m b t values', () => {
    expect(convertNumericShortcuts('1k')).toEqual(1e3);
    expect(convertNumericShortcuts('1100k')).toEqual(11e5);
    expect(convertNumericShortcuts('1,100k')).toEqual(11e5);
    expect(convertNumericShortcuts('1100k.56')).toEqual(1100000.56);
    expect(convertNumericShortcuts('1m')).toEqual(1e6);
    expect(convertNumericShortcuts('1.5m')).toEqual(15e5);
    expect(convertNumericShortcuts('1.5m3232.56')).toEqual(15000003232.56);
    expect(convertNumericShortcuts('.5m')).toEqual(5e5);
    expect(convertNumericShortcuts('122m2332.56')).toEqual(1220000002332.56);
    expect(convertNumericShortcuts('.m343')).toEqual('.m343');
    expect(convertNumericShortcuts('1b')).toEqual(1e9);
    expect(convertNumericShortcuts('1t')).toEqual(1e12);
  });
});
