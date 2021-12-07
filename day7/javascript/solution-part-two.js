const { readFileSync } = require("fs"), { EOL } = require("os"), positions = readFileSync("../input.txt", "utf-8").split(",").map(Number).sort((a, b) => a - b), total = positions.reduce((count, cur) => count + cur), avg = ~~(total / positions.length), calc = (m) => (Math.pow(m, 2) + m) / 2
console.log(positions.reduce((count, cur) => count + calc(Math.abs(cur - avg)), 0))
