import toEnum from '../../src/lang/toEnum';

describe('toEnum', () => {
  describe('with only one arguments', () => {
    it('returns one dimensional array filled with index value', () => {
      // @ts-ignore
      expect(toEnum({ rowCount: 3 })).toEqual([0, 1, 2]);
    });

    describe('with callback', () => {
      it('calls callback with indexes', () => {
        expect(
          toEnum(
            // @ts-ignore
            {
              rowCount: 3,
              callback: (rowIndex) => ({ rowIndex })
            }
          )
        ).toEqual([{ rowIndex: 0 }, { rowIndex: 1 }, { rowIndex: 2 }]);
      });
    });
  });

  describe('with two arguments', () => {
    it('returns two dimensional array filled with inner and outer index values', () => {
      expect(
        toEnum(
          // @ts-ignore
          { rowCount: 3, columnCount: 2 }
        )
      ).toEqual([
        [
          [0, 0, 0],
          [0, 1, 1]
        ],
        [
          [1, 0, 2],
          [1, 1, 3]
        ],
        [
          [2, 0, 4],
          [2, 1, 5]
        ]
      ]);
    });

    describe('with empty flag set', () => {
      it('returns matrix with empty values', () => {
        expect(
          toEnum(
            // @ts-ignore
            { rowCount: 3, columnCount: 2, emptyColumn: true }
          )
        ).toEqual([
          [[], []],
          [[], []],
          [[], []]
        ]);
      });
    });
  });
});
