import {
  formatUSD,
  titleCase,
  capitalize
} from './utils';

describe('formatUSD()', () => {
  it('correctly formats a float', () => {
    const n = Math.PI;
    const result = formatUSD(n);

    expect(result).toBe('$3.14');
  });

  it('correctly formats an int', () => {
    const n = 5;
    const result = formatUSD(n);

    expect(result).toBe('$5.00');
  });

  it('correctly formats a properly convertible string', () => {
    const n = '5.00';
    const result = formatUSD(n);

    expect(result).toBe('$5.00');
  });

  it('throws a TypeError if argument is a string, but not convertible', () => {
    const n = '5.0a';
    expect(() => formatUSD(n)).toThrow(TypeError);
  });

  it('throws a TypeError if argument is not a number', () => {
    const n = 'not a number';
    expect(() => formatUSD(n)).toThrow(TypeError);
  });
});


describe('titleCase()', () => {
  it('capitalizes a single word', () => {
    const word = 'buns';
    expect(titleCase(word)).toBe('Buns');
  });

  it('capitalizes each word in a phrase', () => {
    const phrase = 'hot buttered buns';
    expect(titleCase(phrase)).toBe('Hot Buttered Buns');
  });
});


describe('capitalize()', () => {
  it('capitalizes a single word', () => {
    const word = 'buns';
    expect(capitalize(word)).toBe('Buns');
  });

  it('capitalizes only the first word in a phrase', () => {
    const phrase = 'hot buttered buns';
    expect(capitalize(phrase)).toBe('Hot buttered buns');
  });
});
