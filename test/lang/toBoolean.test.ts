import { expect } from 'chai';

import toBoolean from '../../src/lang/toBoolean';

describe('toBoolean', () => {
  it('converts text to boolean', () => {
    expect(toBoolean('  true  ')).to.eql(true);
    expect(toBoolean('true')).to.eql(true);
    expect(toBoolean(true)).to.eql(true);
    expect(toBoolean('yes')).to.eql(true);
    expect(toBoolean('1')).to.eql(true);

    expect(toBoolean('0')).to.eql(false);
    expect(toBoolean('no')).to.eql(false);
    expect(toBoolean('   ')).to.eql(false);
    expect(toBoolean('  false  ')).to.eql(false);
    expect(toBoolean('false')).to.eql(false);
    expect(toBoolean(false)).to.eql(false);
    expect(toBoolean('adsklj')).to.eql('adsklj');
    // @ts-ignore
    expect(toBoolean(undefined)).to.eql(false);
    expect(toBoolean(null)).to.eql(false);
    // @ts-ignore
    expect(toBoolean({})).to.eql({});
    // @ts-ignore
    expect(toBoolean([])).to.eql([]);
  });
});
