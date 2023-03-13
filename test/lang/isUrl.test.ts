import isUrl from '../../src/lang/isUrl';

describe('isUrl', () => {
  it('returns true with valid url', () => {
    ['http://a.b.ca', 'https://a.b.ca'].forEach((val) => {
      expect(isUrl(val)).toBeTruthy();
    });
  });

  it('returns false with invalid url', () => {
    ['http://a.b.c', 'www.google.ca'].forEach((val) => {
      expect(isUrl(val)).toBeFalsy();
    });
  });
});
