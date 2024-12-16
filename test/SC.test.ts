import { SCalculator } from '../src/SCalculator';

test('throws error if the input is invalid', () => {
    expect(() => SCalculator("//|\\n1|2,3")).toThrow("'|' expected but ',' found at position 3.");
});
test('takes a string and returns a integer', () => {
    expect(SCalculator("//sep\\n2sep5")).toBe(7);
});

