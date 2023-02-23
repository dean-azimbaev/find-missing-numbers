import { findMissingNumbers } from "./find-missing-numbers";
import { profit } from "./best-offer";
import { generateSequence } from "./sequence.util";

function main() {
  console.log("========= find missing numbers =============");
  console.log(findMissingNumbers(generateSequence(50, 2)));
  console.log("========= find missing numbers =============");

  console.log("============================================");

  console.log("================ best offer ================");
  console.log(profit([13, 6, 3, 4, 10, 2, 3]), "===", [2, 4]);
  // console.log(profit([12, 13, 14, 15, 16, 17]), "===", [0, 5]);
  // console.log(profit([71, 13, 14, 15, 16, 17, 1967]), "===", [1, 6]);
  // console.log(profit([5, 6, 4, 12]), "===", [2, 3]);
  // console.log(profit([13, 12, 3, 1, 19]), "===", [3, 4]);
  // console.log(profit([13, 12, 11, 10, 9, 8]), "===", []);
  // console.log(profit([-1, 12, 11, 2023, 10, 9, 8, 2022]), "===", [0, 3]);
  // console.log(profit([199, 198, 197, 201]), "===", [2, 3]);
  // console.log(profit([10, 9, 8, 7, 6]), "===", []);
  // console.log(profit([1001, 2, 10, 1000002]), "===", [1, 3]);

  console.log("================ best offer ================");
}

main();
