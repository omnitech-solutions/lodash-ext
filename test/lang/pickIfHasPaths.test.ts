import pickIfHasPaths from '../../src/lang/pickIfHasPaths';

describe('pickIfHasPaths', () => {
  describe('with matching paths', () => {
    it('returns picked paths', () => {
      expect(pickIfHasPaths({ a: 1, b: 2 }, ['a'])).toEqual({ a: 1 });
    });
  });

  describe('without matching paths', () => {
    it('returns picked paths', () => {
      expect(pickIfHasPaths({ a: 1, b: 2 }, ['c'])).toEqual({});
      expect(pickIfHasPaths({ a: 1, b: 2 }, [])).toEqual({ a: 1, b: 2 });
    });
  });
});
