import toEnum from './toEnum';

const toMatrix = (rowCount: number, columnCount: number, callback = undefined) => {
  if (callback) {
    // @ts-ignore
    return toEnum({
      rowCount,
      columnCount,
      // @ts-ignore
      callback: (rowIndex: number, columnIndex: number, index: number) => callback({ rowIndex, columnIndex, index })
    });
  }

  return toEnum({ rowCount, columnCount });
};

export default toMatrix;
