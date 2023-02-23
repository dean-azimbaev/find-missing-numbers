// в последовательности отсутствуют числа 5, 6
// Мы максимальное и минимальное значение в последовательности
// полседовательность отсортирована

export function findMissingNumbers(arr = [1, 2, 3, 4, 7, 8, 9]) {
  const result: number[] = [];

  let maxIndex = arr.length - 1;
  let max = arr[maxIndex];
  let midIndex = Math.floor(maxIndex / 2);
  let mid = arr[midIndex];
  let minIndex = 0;
  let min = arr[minIndex];

  console.log("Max index: ", maxIndex);
  console.log("Max value: ", max);
  console.log("Mid index", midIndex);
  console.log("Mid value: ", mid);
  console.log("Min index:", minIndex);
  console.log("Min value: ", min);

  if (mid - 1 === midIndex) {
    console.log("mid is ok, let's check the right side");
  } else {
    console.log("mid isn't own position");
  }

  return result;
}
