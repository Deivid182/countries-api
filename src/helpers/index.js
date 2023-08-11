export function getCurrencyName(currencies) {
  const currencyKeys = Object.keys(currencies);
  const firstCurrencyKey = currencyKeys[0];
  return currencies[firstCurrencyKey].name;
}

export function getNativeName(nativeName) {
  const currencyKeys = Object.keys(nativeName);
  const firstCurrencyKey = currencyKeys[0];
  return nativeName[firstCurrencyKey].common;
}

export const formatter = new Intl.NumberFormat('en-US')

export const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

export function getBorderCountryNames(items) {

  let borders = items.map(border => border.substring(0, border.length - 1));

  const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
  const newBorders = borders.map(border => regionNames.of(border))

  return newBorders
}
