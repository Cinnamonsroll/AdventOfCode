const { readFileSync } = require("node:fs");
const input = readFileSync("./input.txt", "utf-8").split("\n");
let gammaRate = 0,
  epsilon = 0,
  list = [...input];
for (let i = 0; i < 12; i++) {
  let counts = {
    zero: 0,
    one: 0,
  };
  for (let element of list) {
    if (!+element[i]) counts.zero++;
    else counts.one++;
  }
  if (counts.one > counts.zero) {
    gammaRate += 2 ** (11 - i);
  } else {
    epsilon += 2 ** (11 - i);
  }
}
console.log(gammaRate * epsilon);
