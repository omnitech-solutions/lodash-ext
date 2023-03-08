import isBlank from './isBlank';

const isPresent = (arg: any) => !isBlank(arg);

export default isPresent;
