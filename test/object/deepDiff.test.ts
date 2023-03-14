import { expect } from 'chai';

import { clone, set } from 'lodash';
import deepDiff from '../../src/object/deepDiff';

describe('deepDiff', () => {
  describe('simple object', () => {
    const a = { one: 1, two: 2 };
    const b = clone(a);

    it('returns empty object when the same', () => {
      expect(deepDiff(a, b)).to.eql({});
      expect(deepDiff(b, a)).to.eql({});
    });

    it('returns differences when objects have differences', () => {
      set(a, 'two', 4);

      expect(deepDiff(a, b)).to.eql({ two: 2 });
      expect(deepDiff(b, a)).to.eql({ two: 4 });
    });
  });

  describe('with deep object', () => {
    const a = { one: { car: 1, vehicle: { truck: 3 } }, two: 2 };
    const b = clone(a);

    it('returns empty object when the same', () => {
      expect(deepDiff(a, b)).to.eql({});
      expect(deepDiff(b, a)).to.eql({});
    });

    it('returns differences when objects have differences', () => {
      set(a, 'vehicle.truck', 4);

      expect(deepDiff({ ...a, vehicle: { truck: 4 } }, b)).to.eql({ vehicle: undefined });
      expect(deepDiff(b, { ...a, vehicle: { truck: 4 } })).to.eql({
        vehicle: {
          truck: 4
        }
      });
    });
  });
});
