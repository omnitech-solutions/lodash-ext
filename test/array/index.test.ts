import { omit, omitIndex } from '../../src/array/index';

describe('exports', () => {
  [omit, omitIndex].forEach((func) => {
    it(`${func.name} returns a function`, () => {
      expect(typeof func).toEqual('function');
    });
  });
});
