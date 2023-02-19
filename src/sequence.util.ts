export class WrongNumberException extends Error {
  constructor(message: string) {
    super(message);
  }
}

export function generateSequence(size: number, skipFrom: number): number[] {
  if (skipFrom <= 0) {
    throw new WrongNumberException(
      `skipFrom should be grater than 0, recived: ${skipFrom}`
    );
  }

  const result: number[] = [];

  for (let i = 1; i <= size; i++) {
    if (i === skipFrom || i === skipFrom + 1) {
      continue;
    }

    result.push(i);
  }

  return result;
}
