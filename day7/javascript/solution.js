const { readFileSync } = require("fs"), { EOL } = require("os"), positions = readFileSync("../input.txt", "utf-8").split(",").map(Number).sort((a, b) => a - b), median = positions[positions.length/2];
console.log(positions.reduce((count, cur) => count + Math.abs(median - cur), 0))
