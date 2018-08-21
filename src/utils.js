export function formatUSD(num) {
  if (isNaN(num)) throw new TypeError(`${num} is not a number`);

  num = Number(num);
  return `$${num.toFixed(2)}`;
}

export function titleCase(str) {
  return str.split(' ').map(capitalize).join(' ');
}

export function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}
