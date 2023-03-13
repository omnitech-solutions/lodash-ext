import dottedKeys from '../../src/object/dottedKeys';

describe('dottedKeys', () => {
  describe('with underscore as separator', () => {
    it('returns flat object with underscore as separator', () => {
      const input = {
        entries: [{ ledger_account_id: 1 }]
      };

      const expected = ['entries_0_ledger_account_id'];

      const actual = dottedKeys(input, { separator: '_' });

      expect(actual).toEqual(expected);
    });
  });

  it('converts an object to dot notation', () => {
    const input = {
      entries: [{ ledger_account_id: 1 }]
    };

    const expected = ['entries.0.ledger_account_id'];

    const actual = dottedKeys(input);

    expect(actual).toEqual(expected);
  });

  describe('with useBrackets option set', () => {
    it('converts an object to dot notation', () => {
      const input = {
        entries: [{ ledger_account_id: 1 }]
      };

      const expected = ['entries[0].ledger_account_id'];

      const actual = dottedKeys(input, { useBrackets: true });

      expect(actual).toEqual(expected);
    });
  });

  it('handles ignoring integer keys from array values', () => {
    const input = {
      entries: [{ ledger_account_id: [1, 2, 3] }]
    };

    const expected = ['entries.*.ledger_account_id.*'];

    const actual = dottedKeys(input, { ignoreArrayIndexKeys: true });

    expect(actual).toEqual(expected);
  });

  it('converts multiple elements', () => {
    const input = {
      entries: [{ ledger_account_id: 1, amount: 10000.0 }]
    };

    const expected = ['entries.0.ledger_account_id', 'entries.0.amount'];

    const actual = dottedKeys(input);

    expect(actual).toEqual(expected);
  });

  it('should return dotted keys from object', () => {
    const transaction = {
      transaction: {
        id: 123,
        transaction_entries: [
          { ledger_account_number: 110000, amount: 10000, type: 'Bank' },
          { ledger_account_number: 210000, amount: 4000, type: 'Payable' },
          { ledger_account_number: 220000, amount: 6000, type: 'Payable' }
        ]
      }
    };

    const actual = dottedKeys(transaction);

    expect(actual).toEqual([
      'transaction.id',
      'transaction.transaction_entries.0.ledger_account_number',
      'transaction.transaction_entries.0.amount',
      'transaction.transaction_entries.0.type',
      'transaction.transaction_entries.1.ledger_account_number',
      'transaction.transaction_entries.1.amount',
      'transaction.transaction_entries.1.type',
      'transaction.transaction_entries.2.ledger_account_number',
      'transaction.transaction_entries.2.amount',
      'transaction.transaction_entries.2.type'
    ]);
  });
});
