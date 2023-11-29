import { processData } from './dataProcessor';

describe('processData', () => {
  it('should sum all elements', () => {
    const result = processData([2, 3, 4, 10, 23, -3, 1302, -532]);

    expect(result).toEqual(809);
  });
});
