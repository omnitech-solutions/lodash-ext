import DOT from 'dot-object';

const dot = (obj: object, { separator = '.', keepArray = false, useBrackets = true } = {}) => {
  DOT.keepArray = keepArray;
  // @ts-ignore
  DOT.useBrackets = useBrackets;

  const dottedObj = DOT.dot(obj);
  if (separator === '.') return dottedObj;

  return Object.entries(dottedObj).reduce((memo, [_key, value]) => {
    const key = _key.replace(/\./g, separator);
    return { ...memo, [key]: value };
  }, {});
};

export default dot;
