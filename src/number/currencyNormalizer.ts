const numeral = require('numeral');

const currencyNormalizer = (value: string | null | undefined) =>
  value && /[0-9]/.test(value) ? numeral(value).format('0.0[0000]') : '';

export default currencyNormalizer;
