let { readFileSync } = require("fs"),
  { EOL } = require("os"), input = readFileSync('../input.txt', 'utf-8')
    .split(EOL)
    .map((row) => row.split('').map((n) => parseInt(n)));
function isLowpoint(array, x, y) {
  const adjacentPoints = [];
  if (array[y - 1] !== undefined) {
    adjacentPoints.push(array[y - 1][x]);
  }
  if (array[y][x - 1] !== undefined) {
    adjacentPoints.push(array[y][x - 1]);
  }
  if (array[y][x + 1] !== undefined) {
    adjacentPoints.push(array[y][x + 1]);
  }
  if (array[y + 1] !== undefined) {
    adjacentPoints.push(array[y + 1][x]);
  }
  for (const point of adjacentPoints) {
    if (array[y][x] >= point) {
      return false;
    }
  }
  return true;
}
function getLowPoints(array) {
  const lowPoints = [];
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[y].length; x++) {
      if (isLowpoint(array, x, y)) {
        lowPoints.push(x + '-' + y);
      }
    }
  }
  return lowPoints;
}

const lowPoints = getLowPoints(input);

function getBasinSize(array, coordinate, basinSet = new Set([coordinate])) {
  const [x, y] = coordinate.split('-').map(string => +string);
  const adjacentBasin = [];
  const top = x + '-' + (y - 1);
  const left = (x - 1) + '-' + y;
  const right = (x + 1) + '-' + y;
  const bottom = x + '-' + (y + 1);
  if (array[y - 1] !== undefined && array[y - 1][x] !== 9 && !basinSet.has(top)) {
    adjacentBasin.push(top);
    basinSet.add(top);
  }
  if (array[y][x - 1] !== undefined && array[y][x - 1] !== 9 && !basinSet.has(left)) {
    adjacentBasin.push(left);
    basinSet.add(left);
  }
  if (array[y][x + 1] !== undefined && array[y][x + 1] !== 9 && !basinSet.has(right)) {
    adjacentBasin.push(right);
    basinSet.add(right);
  }
  if (array[y + 1] !== undefined && array[y + 1][x] !== 9 && !basinSet.has(bottom)) {
    adjacentBasin.push(bottom);
    basinSet.add(bottom);
  }
  adjacentBasin.forEach(newCoordinate => getBasinSize(array, newCoordinate, basinSet));
  return basinSet.size;
}

const basinsizesArray = lowPoints.map(coordinate => getBasinSize(input, coordinate));
basinsizesArray.sort((a, b) => b - a);
console.log(basinsizesArray[0] * basinsizesArray[1] * basinsizesArray[2]);
