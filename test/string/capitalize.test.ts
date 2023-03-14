import { expect } from 'chai';

import capitalize from '../../src/string/capitalize';

describe('capitalize', () => {
  it('removes spaces between', () => {
    expect(capitalize('abc def')).to.eql('Abc def');
  });
});
