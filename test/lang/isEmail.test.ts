import isEmail from '../../src/lang/isEmail';

describe('isEmail', () => {
  it('returns true with valid email format', () => {
    ['email@domain.com', 'email@d.ca'].forEach((val) => {
      expect(isEmail(val)).toBeTruthy();
    });
  });

  it('returns false with invalid email format', () => {
    ['not-an-email', 'email@domain.c'].forEach((val) => {
      expect(isEmail(val)).toBeFalsy();
    });
  });
});
