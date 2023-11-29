import { add, multiply } from './mathFunctions';

describe('add', () => {
  it('should sum numbers', () => {
    const result = add(15, 23);

    expect(result).toEqual(38);
  });
});

describe('multiply', () => {
  it('should multiply numbers', () => {
    const result = multiply(5, 3);

    expect(result).toEqual(15);
  });
});
