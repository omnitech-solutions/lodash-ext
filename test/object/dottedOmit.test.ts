import dottedOmit from '../../src/object/dottedOmit';

describe('dottedOmit', () => {
  const deeplyNestedObj = Object.freeze({
    a: 1,
    b: {
      c: 3,
      d: [1, 2, 3],
      e: { f: { g: 1 } }
    },
    c: 2
  });

  it('removes non dotted keys', () => {
    expect(dottedOmit(deeplyNestedObj, ['b'])).toEqual({
      a: 1,
      c: 2
    });
  });

  it('removes deeply non dotted keys', () => {
    expect(dottedOmit(deeplyNestedObj, ['a', 'c', 'b.c', 'b.e.f.g'])).toEqual({
      b: { d: [1, 2, 3] }
    });
  });
});
