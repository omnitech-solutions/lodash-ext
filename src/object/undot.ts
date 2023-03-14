import DOT from 'dot-object';

const undot = (dottedObj: object, { separator = '.' } = {}) => {
  if (separator === '.') return DOT.object(dottedObj);

  return new DOT(separator).object(dottedObj);
};

export default undot;
