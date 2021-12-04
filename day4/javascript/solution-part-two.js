let { readFileSync } = require("node:fs");
let { EOL } = require("node:os");
const input = readFileSync("../input.txt", "utf-8").split(EOL + EOL);
const winningNums = input.shift().split(",");
const boards = input.map((board) =>
    board
      .split(EOL)
      .map((boardLine) =>
        boardLine.match(/\d+/g).map((cell) => ({ marked: false, value: +cell }))
      )
  ),
  checkWin = (board) => {
    for (let i = 0; i < board.length; i++) {
      const line = board[i];
      const row = board.map((l) => l[i]);

      if (
        line.every((number) => number.marked) ||
        row.every((number) => number.marked)
      ) {
        const unmarkedNumbersSum = board
          .flat()
          .filter((number) => !number.marked)
          .reduce((acc, a) => acc + a.value, 0);

        return unmarkedNumbersSum;
      }
    }

    return null;
  },
  winners = [];
for (let h = 0; h < winningNums.length; h++) {
  const numberToCall = winningNums[h];
  for (let i = 0; i < boards.length; i++) {
    if (!winners.includes(i)) {
      const board = boards[i];
      for (let j = 0; j < board.length; j++) {
        const line = board[j];
        for (let k = 0; k < line.length; k++) {
          const number = line[k];
          if (number.value === +numberToCall) {
            number.marked = true;
          }
        }
      }

      const hasWon = checkWin(board);

      if (hasWon) {
        if (winners.length === boards.length - 1) {
          console.log(numberToCall * hasWon);
          return;
        }
        winners.push(i);
      }
    }
  }
}
