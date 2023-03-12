import { capitalize, replaceAll, titleize, trim } from '../../src/string/index';

describe('exports', () => {
  [capitalize, replaceAll, titleize, trim].forEach((func) => {
    it(`${func.name} returns a function`, () => {
      expect(typeof func).toEqual('function');
    });
  });
});
