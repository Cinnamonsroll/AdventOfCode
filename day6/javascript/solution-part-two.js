let { readFileSync } = require("node:fs"), { EOL } = require("node:os"), ageCounts = Array(9).fill(0);
const fishies = readFileSync("../input.txt", "utf-8").split(",").map(Number);
for (let fish of fishies) {
  ageCounts[fish]++;
}
for (let i = 0; i < 256; i++) {
  ageCounts[(i + 7) % 9] += ageCounts[i % 9]
}
console.log(ageCounts.reduce((a, b) => a + b));
