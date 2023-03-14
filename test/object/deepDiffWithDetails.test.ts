import { expect } from 'chai';

import { clone, set } from 'lodash';
import deepDiffWithDetails from '../../src/object/deepDiffWithDetails';

describe('deepDiffWithDetails', () => {
  describe('simple object', () => {
    const a = { one: 1, two: 2 };
    const b = clone(a);

    it('returns empty object when the same', () => {
      expect(deepDiffWithDetails(a, b)).to.eql({ added: {}, deleted: {}, updated: {} });
      expect(deepDiffWithDetails(b, a)).to.eql({ added: {}, deleted: {}, updated: {} });
    });

    it('returns differences when objects have differences', () => {
      set(a, 'two', 4);

      expect(deepDiffWithDetails(a, b)).to.eql({
        added: {},
        deleted: {},
        updated: {
          two: 2
        }
      });

      expect(deepDiffWithDetails(b, a)).to.eql({
        added: {},
        deleted: {},
        updated: {
          two: 4
        }
      });
    });
  });

  describe('with deep object', () => {
    const a = { one: { car: 1, vehicle: { truck: 3 } }, two: 2 };
    const b = clone(a);

    it('returns empty object when the same', () => {
      expect(deepDiffWithDetails(a, b)).to.eql({ added: {}, deleted: {}, updated: {} });
      expect(deepDiffWithDetails(b, a)).to.eql({ added: {}, deleted: {}, updated: {} });
    });

    it('returns differences when objects have differences', () => {
      set(a, 'vehicle.truck', 4);

      expect(deepDiffWithDetails(a, b)).to.eql({
        added: {},
        deleted: { vehicle: undefined },
        updated: {}
      });
      expect(deepDiffWithDetails(b, a)).to.eql({
        added: {
          vehicle: {
            truck: 4
          }
        },
        deleted: {},
        updated: {}
      });
    });
  });
});
