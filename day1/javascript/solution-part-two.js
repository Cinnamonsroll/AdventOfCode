const { readFileSync } = require("node:fs");
const input = readFileSync("../input.txt", "utf-8").split("\n");
let increased = 0,
  numbers = [],
  length = input.length;
for (let i = 0, preSum; i < length; i++) {
  if (!i) {
    numbers.push(+input[i], +input[i + 1], +input[i + 2]);
    preSum = numbers[0] + numbers[1] + numbers[2];
    continue;
  }
  numbers.push(+input[i + 2]);
  const curSum = numbers[i] + numbers[i + 1] + numbers[i + 2];
  preSum = curSum > preSum ? (increased++, curSum) : curSum;
}
console.log(increased);
