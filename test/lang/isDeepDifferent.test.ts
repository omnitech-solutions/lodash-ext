import { expect } from 'chai';
import { cloneDeep, set } from 'lodash';
import isDeepDifferent from '../../src/lang/isDeepDifferent';

describe('isDeepDifferent', () => {
  describe('with callback', () => {
    describe('simple object', () => {
      const a = { one: 1, two: 2 };
      const b = cloneDeep(a);

      it('returns false when the same', () => {
        expect(isDeepDifferent(a, b)).to.be.false;
      });

      it('returns true when objects have differences', () => {
        set(a, 'two', 4);

        expect(isDeepDifferent(a, b)).to.be.true;
      });
    });

    describe('deep object', () => {
      const a = { one: { car: 1, vehicle: { truck: 3 } }, two: 2 };
      const b = cloneDeep(a);

      it('returns false when the same', () => {
        expect(isDeepDifferent(a, b)).to.be.false;
      });

      it('returns true when objects have deep differences', () => {
        set(a, 'vehicle.truck', 4);

        expect(isDeepDifferent(a, b)).to.be.true;
      });
    });

    describe('handles array of nested objects', () => {
      const a = [{ one: { car: 1, vehicle: { truck: 3 } }, two: 2 }];
      const b = cloneDeep(a);

      it('returns false when the same', () => {
        expect(isDeepDifferent(a, b)).to.be.false;
      });

      it('returns true when objects have deep differences', () => {
        set(a, '0.one.vehicle.truck', 4);

        expect(isDeepDifferent(a, b)).to.be.true;
      });
    });

    describe('handles picking object keys', () => {
      const a = { a: 1, b: 2, c: 3 };
      const b = { a: 1, b: 1, c: 3 };

      it('returns false when the same', () => {
        expect(isDeepDifferent(a, b, { keysToPick: ['c'] })).to.be.false;
      });

      it('returns true when objects have deep differences', () => {
        expect(isDeepDifferent(a, b, { keysToPick: [] })).to.be.true;
      });
    });
  });
});
