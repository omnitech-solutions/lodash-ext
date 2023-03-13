const toEnum = ({
  rowCount = 0,
  columnCount = 0,
  // @ts-ignore
  callback = undefined,
  emptyColumn = false
}: {
  rowCount?: number;
  columnCount?: number;
  callback?: (message: unknown) => void;
  emptyColumn?: boolean;
}) => {
  const buildArray = (count: number, itemCallback = undefined) =>
    Array.from(Array(count), (_, i) => {
      if (itemCallback) {
        // @ts-ignore
        return itemCallback(i);
      }
      return i;
    });

  if (columnCount < 1) {
    // @ts-ignore
    return buildArray(rowCount, callback);
  }

  let k = 0;
  return buildArray(rowCount).map((i) =>
    buildArray(columnCount).map((j) => {
      if (callback) {
        // @ts-ignore
        // eslint-disable-next-line no-plusplus
        return callback(i, j, k++);
      }

      // @ts-ignore
      // eslint-disable-next-line no-plusplus
      return emptyColumn ? [] : [i, j, k++];
    })
  );
};

export default toEnum;
