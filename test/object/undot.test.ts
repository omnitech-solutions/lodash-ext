import { expect } from 'chai';

import undot from '../../src/object/undot';

describe('undot', () => {
  it('undots flattened data', () => {
    expect(
      undot({
        companyName: 'some-company-name',
        'companyAddress.streetLine1': 'some-street',
        'companyAddress.city': 'some-city'
      })
    ).to.eql({
      companyAddress: { city: 'some-city', streetLine1: 'some-street' },
      companyName: 'some-company-name'
    });
  });

  describe('with underscore as separator', () => {
    it('undots flattened data', () => {
      expect(
        undot(
          {
            companyName: 'some-company-name',
            companyAddress_streetLine1: 'some-street',
            companyAddress_city: 'some-city'
          },
          { separator: '_' }
        )
      ).to.eql({
        companyAddress: { city: 'some-city', streetLine1: 'some-street' },
        companyName: 'some-company-name'
      });
    });
  });
});
