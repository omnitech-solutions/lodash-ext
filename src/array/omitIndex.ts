import { pullAt } from 'lodash';

const omitIndex = (array: Array<any>, index: number) => {
  pullAt(array, index); // removes indexes from given array
  return array;
};

export default omitIndex;
