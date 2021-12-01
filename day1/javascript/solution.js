const { readFileSync } = require("node:fs");
const input = readFileSync("../input.txt", "utf-8").split("\n");
let increased = 1, length = input.length;
for (let i = 1; i < length; i++) {
  if (input[i] > input[i - 1]) increased++;
}
console.log(increased);
