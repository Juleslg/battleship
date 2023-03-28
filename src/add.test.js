import { add } from "./index";

describe("add", () => {
  test("should return the sum of two numbers", () => {
    const a = 5;
    const b = 3;
    const expectedSum = 8;

    const result = add(a, b);

    expect(result).toBe(expectedSum);
  });

  test("should work with negative numbers", () => {
    const a = -5;
    const b = 3;
    const expectedSum = -2;

    const result = add(a, b);

    expect(result).toBe(expectedSum);
  });

  test("should work with decimal numbers", () => {
    const a = 5.5;
    const b = 3.3;
    const expectedSum = 8.8;

    const result = add(a, b);

    expect(result).toBeCloseTo(expectedSum);
  });
});
