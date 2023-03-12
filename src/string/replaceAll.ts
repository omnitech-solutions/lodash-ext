/**
 * Replaces all entries of @patternReplacements for given @value
 * @patternReplacements must be in the form of [[some-pattern, some-replacement],
 * [some-other-pattern, some-other-replacement]]
 *
 * @return value with all replacements put in place
 */
const replaceAll = ({ value, patternReplacements }: { value: string; patternReplacements: Array<string | RegExp> }) =>
  // @ts-ignore
  patternReplacements.reduce((memo, [pattern, replacement]) => memo.replace(pattern, replacement), value);
export default replaceAll;
