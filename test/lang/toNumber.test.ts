import toNumber from '../../src/lang/toNumber';

describe('toNumber', () => {
  it('converts values to numbers', () => {
    expect(toNumber('250000')).toEqual(250000.0)
    expect(toNumber('$250,000')).toEqual(250000.0)
    expect(toNumber('$250,000.00')).toEqual(250000.0)
    expect(toNumber('£250,000.00')).toEqual(250000.0)
    expect(toNumber('  true  ')).toEqual(0)
    expect(toNumber('true')).toEqual(0)
    // @ts-ignore
    expect(toNumber(true)).toEqual(1)
    expect(toNumber('  false  ')).toEqual(0)
    expect(toNumber('false')).toEqual(0)
    // @ts-ignore
    expect(toNumber(false)).toEqual(0)
    expect(toNumber('adsklj')).toEqual(0)
    // @ts-ignore
    expect(toNumber(undefined)).toEqual(0)
    // @ts-ignore
    expect(toNumber({})).toEqual(NaN)
    // @ts-ignore
    expect(toNumber([])).toEqual(0)
  })
})
