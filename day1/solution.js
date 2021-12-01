const { readFileSync } = require("node:fs");
const input = readFileSync("./input.txt", "utf-8").split("\n");
let increased = 0;
for (let i = 1; i < input.length - 1; i++) {
  if (+input[i] > +input[i - 1]) increased++;
}
console.log(increased);
