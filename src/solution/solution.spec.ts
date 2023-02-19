import { generateSequence } from "../sequence.util";

import { findMissingNumbers as linear } from "./o-n.solution";
// import { findMissingNumbers as logN } from "./log-n.solution";

describe("find missing numbers in sequence", () => {
  const size = 20;
  const skipFrom: number = 10;
  const sequence: number[] = generateSequence(size, skipFrom);
  const missingNumbers = [skipFrom, skipFrom + 1];

  it("should return missing numbers for O(n) solution", () => {
    expect(linear(sequence)).toEqual(missingNumbers);
  });

//   it("should return missing number for log(n) solution", () => {
//     expect(logN(sequence)).toEqual(missingNumbers);
//   });
});
