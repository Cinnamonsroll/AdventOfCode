const { readFileSync } = require("node:fs");
const input = readFileSync("../input.txt", "utf-8").split("\n");
function co2(oxygen) {
  let list = [...input];
  for (let i = 0; list.length > 1 && i < 12; i++) {
    let counts = {
      zero: 0,
      one: 0,
    };
    for (let element of list) {
      if (!+element[i]) counts.zero++;
      else counts.one++;
    }
    if (counts.one >= counts.zero) {
      list = list.filter((x) => (oxygen ? !!+x[i] : !+x[i]));
    } else {
      list = list.filter((x) => (oxygen ? !+x[i] : !!+x[i]));
    }
  }
  return parseInt(list[0], 2);
}
console.log(co2() * co2(true));
