export function findMissingNumbers(sequence: number[]) {
  const fullSequenceLength = sequence[sequence.length - 1];
  const counter = new Array<number>(fullSequenceLength).fill(0);

  for (let i = 0; i < sequence.length; i++) {
    counter[sequence[i] - 1] = 1;
  }

  const result = [];

  for (let i = 0; i < fullSequenceLength; i++) {
    if (counter[i] === 0) {
      result.push(i + 1);
    }
  }

  return result;
}
