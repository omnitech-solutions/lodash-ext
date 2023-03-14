import { expect } from 'chai';

import dot from '../../src/object/dot';

describe('dot', () => {
  it('returns flat object with underscore as separator', () => {
    const input = {
      a: { b: { c: 1 } }
    };

    const expected = { 'a.b.c': 1 };

    const actual = dot(input);

    expect(actual).to.eql(expected);
  });

  describe('with underscore as separator', () => {
    it('returns flat object with underscore as separator', () => {
      const input = {
        a: { b: { c: 1 } }
      };

      const expected = { a_b_c: 1 };

      const actual = dot(input, { separator: '_' });

      expect(actual).to.eql(expected);
    });
  });
});
