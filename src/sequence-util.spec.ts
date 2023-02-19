import { generateSequence, WrongNumberException } from "./sequence.util";

describe("Generate sequence", () => {
  it("should be defined", () => {
    expect(generateSequence).toBeDefined();
    expect(typeof generateSequence).toBe("function");
  });

  it("should generate sequence without two numbers", () => {
    const size = 10;
    const skipFrom = 5;
    const result = generateSequence(size, skipFrom);
    const expectedResult = [1, 2, 3, 4, 7, 8, 9, 10];
    expect(result).toEqual(expectedResult);
  });

  it("should thrown error for zero or negative number for skipFrom", () => {
    expect(() => generateSequence(10, -1)).toThrowError(WrongNumberException);
    expect(() => generateSequence(10, 0)).toThrowError(WrongNumberException);
    expect(() => generateSequence(10, -9999)).toThrowError(
      WrongNumberException
    );
  });
});
