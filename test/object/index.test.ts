import { expect } from 'chai';

import {
  deepDiff,
  deepDiffWithDetails,
  dot,
  dottedKeys,
  dottedOmit,
  dottedPick,
  matchesSearchPaths,
  undot
} from '../../src/object/index';

describe('exports', () => {
  [deepDiff, deepDiffWithDetails, dot, dottedKeys, dottedOmit, dottedPick, matchesSearchPaths, undot].forEach(
    (func) => {
      it(`${func.name} returns a function`, () => {
        expect(typeof func).to.eql('function');
      });
    }
  );
});
