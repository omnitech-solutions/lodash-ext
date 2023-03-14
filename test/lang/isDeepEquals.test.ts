import { expect } from 'chai';
import { set, cloneDeep } from 'lodash';

import isDeepEquals from '../../src/lang/isDeepEquals';

describe('isDeepEquals', () => {
  describe('with callback', () => {
    describe('simple object', () => {
      const a = { one: 1, two: 2 };
      const b = cloneDeep(a);

      it('returns true when the same', () => {
        expect(isDeepEquals(a, b)).to.be.true;
      });

      it('returns false when objects have differences', () => {
        set(a, 'two', 4);

        expect(isDeepEquals(a, b)).to.be.false;
      });
    });

    describe('deep object', () => {
      const a = { one: { car: 1, vehicle: { truck: 3 } }, two: 2 };
      const b = cloneDeep(a);

      it('returns true when the same', () => {
        expect(isDeepEquals(a, b)).to.be.true;
      });

      it('returns false when objects have deep differences', () => {
        set(a, 'vehicle.truck', 4);

        expect(isDeepEquals(a, b)).to.be.false;
      });
    });

    describe('handles array of nested objects', () => {
      const a = [{ one: { car: 1, vehicle: { truck: 3 } }, two: 2 }];
      const b = cloneDeep(a);

      it('returns true when the same', () => {
        expect(isDeepEquals(a, b)).to.be.true;
      });

      it('returns false when objects have deep differences', () => {
        // a[0].one.vehicle.truck = 4;
        set(a, '0.one.vehicle.truck', 4);

        expect(isDeepEquals(a, b)).to.be.false;
      });
    });

    describe('handles picking object keys', () => {
      const a = { a: 1, b: 2, c: 3 };
      const b = { a: 1, b: 1, c: 3 };

      it('returns true when the same', () => {
        expect(isDeepEquals(a, b, { keysToPick: ['c'] })).to.be.true;
      });

      it('returns false when objects have deep differences', () => {
        expect(isDeepEquals(a, b, { keysToPick: [] })).to.be.false;
      });
    });
  });
});
