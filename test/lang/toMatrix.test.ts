import toMatrix from '../../src/lang/toMatrix';

describe('toMatrix', () => {
  describe('without callback', () => {
    it('returns two dimensional array filled with inner and outer index values', () => {
      expect(toMatrix(3, 2)).toEqual([
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
  });

  describe('with callback', () => {
    it('maps two dimensional array values on return value for each executed callback', () => {
      // @ts-ignore
      const matrix = toMatrix(4, 4, ({ rowIndex, columnIndex, index }) => ({
        rowIndex,
        columnIndex,
        index
      }));

      expect(matrix).toEqual([
        [
          { rowIndex: 0, columnIndex: 0, index: 0 },
          { rowIndex: 0, columnIndex: 1, index: 1 },
          { rowIndex: 0, columnIndex: 2, index: 2 },
          { rowIndex: 0, columnIndex: 3, index: 3 }
        ],
        [
          { rowIndex: 1, columnIndex: 0, index: 4 },
          { rowIndex: 1, columnIndex: 1, index: 5 },
          { rowIndex: 1, columnIndex: 2, index: 6 },
          { rowIndex: 1, columnIndex: 3, index: 7 }
        ],
        [
          { rowIndex: 2, columnIndex: 0, index: 8 },
          { rowIndex: 2, columnIndex: 1, index: 9 },
          { rowIndex: 2, columnIndex: 2, index: 10 },
          { rowIndex: 2, columnIndex: 3, index: 11 }
        ],
        [
          { rowIndex: 3, columnIndex: 0, index: 12 },
          { rowIndex: 3, columnIndex: 1, index: 13 },
          { rowIndex: 3, columnIndex: 2, index: 14 },
          { rowIndex: 3, columnIndex: 3, index: 15 }
        ]
      ]);
    });
  });
});
