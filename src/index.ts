import { linear, binary } from "./solution";
import { generateSequence } from "./sequence.util";

function main() {
  const size = 50;
  const skipFrom = 2;
  const sequence = generateSequence(size, skipFrom);

  console.time("linear");
  console.log("result of linear: ", linear(sequence));
  console.timeEnd("linear");

  // console.time("binary");
  // console.log("result of binary:", binary(sequence));
  // console.timeEnd("binary");
}

main();
