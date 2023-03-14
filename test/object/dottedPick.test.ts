import { expect } from 'chai';

import dottedPick from '../../src/object/dottedPick';

describe('dottedPick', () => {
  const obj = Object.freeze({
    a: 1,
    b: {
      c: 3,
      d: [1, 2, 3],
      e: { f: { g: 1 } }
    },
    c: 2
  });

  it('removes non dotted keys', () => {
    expect(dottedPick(obj, ['b'])).to.eql({
      b: {
        c: 3,
        d: [1, 2, 3],
        e: { f: { g: 1 } }
      }
    });
  });

  it('removes deeply non dotted keys', () => {
    expect(dottedPick(obj, ['a', 'c', 'b.c', 'b.e.f.g'])).to.eql({
      a: 1,
      b: {
        c: 3,
        e: { f: { g: 1 } }
      },
      c: 2
    });
  });
});
