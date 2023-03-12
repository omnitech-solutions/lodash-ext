import replaceAll from '../../src/string/replaceAll';

describe('replaceAll', () => {
  it('allows for multiple replacements for given value', () => {
    expect(
      replaceAll({
        value: '{{attribute}}',
        patternReplacements: [
          // @ts-ignore
          [/{{/, ':'],
          // @ts-ignore
          [/}}/, '']
        ]
      })
    ).toEqual(':attribute');
  });

  it('does not mutate value', () => {
    const value = '{{attribute}}';
    replaceAll({
      value,
      patternReplacements: [
        // @ts-ignore
        [/{{/, ':'],
        // @ts-ignore
        [/}}/, '']
      ]
    });

    expect(value).toEqual('{{attribute}}');
  });
});
