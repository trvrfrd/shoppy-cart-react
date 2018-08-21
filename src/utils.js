export function formatUSD(num) {
  if (isNaN(num)) throw new TypeError(`${num} is not a number`);

  num = Number(num);
  return `$${num.toFixed(2)}`;
}

export function titleCase(str) {
  return str.split(' ').map(capitalize).join(' ');
}

export function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1);
}
