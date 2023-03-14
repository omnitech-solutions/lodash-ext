import { expect } from 'chai';
import { clone, set } from 'lodash';
import commonDeepFilter from '../../src/common/commonDeepFilter';

describe('commonDeepFilter', () => {
  describe('simple object', () => {
    const a = { one: 1, two: 2 };
    const b = clone(a);

    it('returns empty object when the same', () => {
      expect(commonDeepFilter(a, b)).to.eql([
        { one: 1, two: 2 },
        { one: 1, two: 2 }
      ]);
    });

    it('returns differences when objects have differences', () => {
      set(a, 'two', 4);

      expect(commonDeepFilter(a, b)).to.eql([
        { one: 1, two: 4 },
        { one: 1, two: 2 }
      ]);
    });
  });

  describe('with deep object', () => {
    const a = { one: { car: 1, vehicle: { truck: 3 } }, two: 2 };
    const b = clone(a);

    it('returns empty object when the same', () => {
      expect(commonDeepFilter(a, b)).to.eql([
        {
          one: { car: 1, vehicle: { truck: 3 } },
          two: 2
        },
        { one: { car: 1, vehicle: { truck: 3 } }, two: 2 }
      ]);
    });

    it('returns differences when objects have differences', () => {
      set(a, 'vehicle.truck', 4);

      expect(commonDeepFilter(a, b)).to.eql([
        {
          one: { car: 1, vehicle: { truck: 3 } },
          two: 2,
          vehicle: { truck: 4 }
        },
        { one: { car: 1, vehicle: { truck: 3 } }, two: 2 }
      ]);
    });
  });
});
