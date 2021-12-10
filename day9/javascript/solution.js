let { readFileSync } = require("fs"),
  { EOL } = require("os"), input = readFileSync('../input.txt', 'utf-8')
    .split(EOL)
    .map((row) => row.split('').map((n) => parseInt(n))), points = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    let adjacentPositions = [
      input[i - 1]?.[j],
      input[i + 1]?.[j],
      input[i]?.[j - 1],
      input[i]?.[j + 1]
    ]
    if (adjacentPositions.every(x => (x ?? input[i][j] + 1) > input[i][j])) points.push(input[i][j])
  }
}
console.log(points.reduce((acc, p) => acc + (p + 1), 0))
