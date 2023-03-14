import { expect } from 'chai';

import isUrl from '../../src/lang/isUrl';

describe('isUrl', () => {
  it('returns true with valid url', () => {
    ['http://a.b.ca', 'https://a.b.ca'].forEach((val) => {
      expect(isUrl(val)).to.be.true;
    });
  });

  it('returns false with invalid url', () => {
    ['http://a.b.c', 'www.google.ca'].forEach((val) => {
      expect(isUrl(val)).to.be.false;
    });
  });
});
