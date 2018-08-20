import { formatUSD } from './utils';

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
});
