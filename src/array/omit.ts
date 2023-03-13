import { difference } from 'lodash';

const omit = (array: Array<any>, valuesToOmit: Array<any>) =>
  // @ts-ignore
  difference(array, valuesToOmit);
export default omit;
