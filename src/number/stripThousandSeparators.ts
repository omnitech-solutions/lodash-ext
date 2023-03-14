import { isString } from 'lodash';

const stripThousandSeparators = (value: string) => (isString(value) ? value.replace(/,/g, '') : value);

export default stripThousandSeparators;
