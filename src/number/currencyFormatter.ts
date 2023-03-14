import * as currencies from '../data/currencies';

const numeral = require('numeral');

const currencyFormatter = (value: string, currency = 'USD') => {
  // @ts-ignore
  const currencyObj = currencies[currency];
  if (!value) return '';

  return `${currencyObj.symbol}${numeral(value).format(`0,0[.]${Array(currencyObj.precision).fill('0').join('')}`)}`;
};

export default currencyFormatter;
