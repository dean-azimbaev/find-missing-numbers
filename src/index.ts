import { linear } from "./solution";
import { generateSequence } from "./sequence.util";

function main() {
  const size = 50;
  const skipFrom = 2;
  const sequence = generateSequence(size, skipFrom);

  console.log("sequence ====", sequence);
  console.log("[O(n) linear] found missing numbers: ", linear(sequence));
}

main();
