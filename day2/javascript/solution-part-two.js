const { readFileSync } = require("node:fs");
const input = readFileSync("../input.txt", "utf-8").split("\n");
let coordinates = {
    horizontal: 0,
    depth: 0,
    aim: 0
  },
  length = input.length;
for (let i = 0; i < length; i++) {
  let [type, value] = input[i].split(" ");
  switch (type) {
    case "forward":
      coordinates.horizontal += +value;
      coordinates.depth += +value * coordinates.aim;
      break;
    case "down":
      coordinates.aim += +value;
      break;
    case "up":
      coordinates.aim -= +value;
      break;
  }
}
console.log(coordinates.horizontal * coordinates.depth);
