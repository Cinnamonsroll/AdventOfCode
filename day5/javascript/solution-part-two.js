let { readFileSync } = require("node:fs");
let { EOL } = require("node:os");
const spots = new Map(), parsedInput = readFileSync("../input.txt", "utf-8").split("\n").map((line) => line.replace(" -> ", ",").split(",").map(x => +x))
for (const [x1, y1, x2, y2] of parsedInput) {
    const dx = Math.sign(x2 - x1);
    const dy = Math.sign(y2 - y1);
    for (let x = x1, y = y1; x !== x2 + dx || y !== y2 + dy; x += dx, y += dy) {
      const key = [x, y].join`,`
      spots.set(key, (spots.get(key) ?? 0) + 1);
  }
}
console.log([...spots.values()].filter((val) => val > 1).length)
