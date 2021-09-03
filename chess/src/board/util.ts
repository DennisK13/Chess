export function createBoard() {
  let grid = [];
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      if (i % 2 === j % 2) {
        row.push({
          row: i,
          col: alphabet[j],
          colNum: j,
          color: "white",
          border: "black",
          piece: null,
        });
      } else {
        row.push({
          row: i,
          col: alphabet[j],
          colNum: j,
          color: "brown",
          border: "black",
          piece: null,
        });
      }
    }
    grid.push(row);
  }
  return grid;
}
interface IPiece {
  row: number;
  col: string;
  type: string;
}
export function validMoves(board: any, cell: any) {
  let types = [
    { name: "pawn", type: "♙" },
    { name: "bishop", type: "♗" },
    { name: "knight", type: "♘" },
    { name: "rook", type: "♖" },
    { name: "queen", type: "♕" },
    { name: "king", type: "♔" },
  ];
  switch (cell.piece) {
    case types[0].type:
      let index = board[cell.row].indexOf(cell);
      if (cell.row === 1) {
        if (
          board[cell.row + 1][index].piece === null &&
          board[cell.row + 2][index].piece === null
        ) {
          board[cell.row + 1][index].color = "blue";
          board[cell.row + 2][index].color = "blue";
          return [board[cell.row + 1][index], board[cell.row + 2][index]];
        }
        break;
      } else {
        if (board[cell.row + 1][index].piece === null) {
          board[cell.row + 1][index].color = "blue";
          return [board[cell.row + 1][index]];
        }
        break;
      }

    case types[1].type:
      let indexOne = board[cell.row].indexOf(cell);
      let validPath = [];
      let i = 1;
      let y2 = 1;
      let x2 = 1;

      if (indexOne === 7) {
        // don't accidently go to index 8
        //reverse axis order
        while (board[cell.row + i][indexOne - i].piece === null) {
          if (board[cell.row + i][indexOne - i].col === "h") {
            board[cell.row + i][indexOne - i].color = "blue";
            validPath.push(board[cell.row + i][indexOne - i]);
            break;
          } else {
            board[cell.row + i][indexOne - i].color = "blue";
            validPath.push(board[cell.row + i][indexOne - i]);
            i++;
          }
        }
      } else if (indexOne === 0) {
        while (board[cell.row + x2][indexOne + x2].piece === null) {
          if (board[cell.row + x2][indexOne + x2].col === "a") {
            board[cell.row + x2][indexOne + x2].color = "blue";
            validPath.push(board[cell.row + x2][indexOne + x2]);
            console.log(validPath);
            break;
          } else {
            board[cell.row + x2][indexOne + x2].color = "blue";
            validPath.push(board[cell.row + x2][indexOne + x2]);
            y2++;
            x2++;
            console.log(y2, x2);
          }
        }
      } else {
        // Going Right
        while (board[cell.row + i][indexOne + i].piece === null) {
          if (board[cell.row + i][indexOne + i].col === "h") {
            board[cell.row + i][indexOne + i].color = "blue";
            validPath.push(board[cell.row + i][indexOne + i]);
            i = 1;
            break;
          } else {
            board[cell.row + i][indexOne + i].color = "blue";
            validPath.push(board[cell.row + i][indexOne + i]);
            i++;
          }
        }
        // Going Left
        while (board[cell.row + x2][indexOne - y2].piece === null) {
          if (board[cell.row + x2][indexOne - y2].col === "a") {
            board[cell.row + x2][indexOne - y2].color = "blue";
            validPath.push(board[cell.row + x2][indexOne - y2]);
            console.log(validPath);
            break;
          } else {
            board[cell.row + x2][indexOne - y2].color = "blue";
            validPath.push(board[cell.row + x2][indexOne - y2]);
            y2++;
            x2++;
            console.log(`y:${y2}, x:${x2}`);
          }
        }
      }
      return validPath;

    case types[2].type:
      // knight
      let [row, idx] = [cell.row, board[cell.row].indexOf(cell)];
      let knightArr = [];
      if (checkBoundaries(cell.row + 2, idx + 1)) {
        if (board[cell.row + 2][idx + 1].piece === null) {
          board[cell.row + 2][idx + 1].color = "blue";
          knightArr.push(board[cell.row + 2][idx + 1]);
        }
      }
      if (checkBoundaries(cell.row + 2, idx - 1)) {
        if (board[cell.row + 2][idx - 1].piece === null) {
          board[cell.row + 2][idx - 1].color = "blue";
          knightArr.push(board[cell.row + 2][idx - 1]);
        }
      }
      if (checkBoundaries(cell.row - 2, idx + 1)) {
        if (board[cell.row - 2][idx + 1].piece === null) {
          board[cell.row - 2][idx + 1].color = "blue";
          knightArr.push(board[cell.row - 2][idx + 1]);
        }
      }
      if (checkBoundaries(cell.row - 2, idx - 1)) {
        if (board[cell.row - 2][idx - 1].piece === null) {
          board[cell.row - 2][idx - 1].color = "blue";
          knightArr.push(board[cell.row - 2][idx - 1]);
        }
      }

      if (checkBoundaries(cell.row + 1, idx + 2)) {
        if (board[cell.row + 1][idx + 2].piece === null) {
          board[cell.row + 1][idx + 2].color = "blue";
          knightArr.push(board[cell.row + 1][idx + 2]);
        }
      }
      if (checkBoundaries(cell.row + 1, idx - 2)) {
        if (board[cell.row + 1][idx - 2].piece === null) {
          board[cell.row + 1][idx - 2].color = "blue";
          knightArr.push(board[cell.row + 1][idx - 2]);
        }
      }
      if (checkBoundaries(cell.row - 1, idx + 2)) {
        if (board[cell.row - 1][idx + 2].piece === null) {
          board[cell.row - 1][idx + 2].color = "blue";
          knightArr.push(board[cell.row - 1][idx + 2]);
        }
      }
      if (checkBoundaries(cell.row - 1, idx - 2)) {
        if (board[cell.row - 1][idx - 2].piece === null) {
          board[cell.row - 1][idx - 2].color = "blue";
          knightArr.push(board[cell.row - 1][idx - 2]);
        }
      }
      return knightArr;
    case types[3].type:
      // rook
      let rIndex = board[cell.row].indexOf(cell);
      let x = 0;
      let y = 0;
      console.log(rIndex, cell.row, x, y);
      let rookArr: any = [];
      let newBoard = [...board];

      // 
      for (let i = cell.row; i < board.length; i++) {
        if (
          board[i][cell.colNum].piece !== null &&
          board[i][cell.colNum] !== cell
        ) {
          break;
        }

        if (
          board[i][cell.colNum].piece === null &&
          board[i][cell.colNum] !== cell
        ) {
          newBoard[i][cell.colNum].color = "yellow";
          rookArr.push(newBoard[i][cell.colNum]);
        }
      }
      for (let x = cell.row; x >= 0; x--) {
        if (
          newBoard[x][cell.colNum].piece !== null &&
          newBoard[x][cell.colNum] !== cell
        ) {
          break;
        }
        if (
          newBoard[x][cell.colNum].piece === null &&
          newBoard[x][cell.colNum] !== cell
        ) {
          newBoard[x][cell.colNum].color = "yellow";
          rookArr.push(newBoard[x][cell.colNum]);
        }
      }
      for (let j = cell.colNum; j < board[0].length; j++) {
        if (board[cell.row][j].piece !== null && board[cell.row][j] !== cell) {
          break;
        }
        if (board[cell.row][j].piece === null && board[cell.row][j] !== cell) {
          newBoard[cell.row][j].color = "yellow";
          rookArr.push(newBoard[cell.row][j]);
        }
      }
      for (let y = cell.colNum; y >= 0; y--) {
        if (
          newBoard[cell.row][y].piece !== null &&
          newBoard[cell.row][y] !== cell
        ) {
          break;
        }

        if (
          newBoard[cell.row][y].piece === null &&
          newBoard[cell.row][y] !== cell
        ) {
          newBoard[cell.row][y].color = "yellow";
          rookArr.push(newBoard[cell.row][y]);
        }
      }

      return rookArr;
    case types[4].type:
      // queen
      break;
    case types[5].type:
      // king
      break;
    default:
      return [];
  }
}

function checkBoundaries(
  currRow: number,
  currCol: number,
  rowMin = 0,
  rowMax = 7,
  colMin = 0,
  colMax = 7
) {
  if (
    currRow >= rowMin &&
    currRow <= rowMax &&
    currCol >= colMin &&
    currCol <= colMax
  ) {
    return true;
  } else {
    return false;
  }
}
