import isBlank from './isBlank';

const isPresent = (arg: string | null | number | object) => !isBlank(arg);

export default isPresent;
