import { useState, useEffect } from "react";
import "./App.css";
import {
  Game,
  Cell,
  PieceTypes,
  Player,
} from "./Classes/classes";

function getColor(
  i: number,
  j: number,
  game: Game,
  endCell: Array<Cell> | null,
) {
  let values = [];
  values[0] = "black";
  if (endCell !== null && endCell.indexOf(game["board"].board[i][j]) !== -1) {
    values[1] = "green";
  } else {
    if (i % 2 === j % 2) {
      values[1] = "";
    } else {
      values[1] = "brown";
    }
  }
  return values;
}

function displayPiece(cell: Cell) {
  if (cell.getPiece() !== null) {
    if (cell.getPiece()?.isWhite()) {
      if (
        cell.getPiece()!.constructor.name.toLowerCase() ===
        PieceTypes[0].toLowerCase()
      ) {
        return "♙";
      } else if (
        cell.getPiece()!.constructor.name.toLowerCase() ===
        PieceTypes[1].toLowerCase()
      ) {
        return "♖";
      } else if (
        cell.getPiece()!.constructor.name.toLowerCase() ===
        PieceTypes[2].toLowerCase()
      ) {
        return "♘";
      } else if (
        cell.getPiece()!.constructor.name.toLowerCase() ===
        PieceTypes[3].toLowerCase()
      ) {
        return "♗";
      } else if (
        cell.getPiece()!.constructor.name.toLowerCase() ===
        PieceTypes[4].toLowerCase()
      ) {
        return "♕";
      } else if (
        cell.getPiece()!.constructor.name.toLowerCase() ===
        PieceTypes[5].toLowerCase()
      ) {
        return "♔";
      }
    } else {
      if (
        cell.getPiece()!.constructor.name.toLowerCase() ===
        PieceTypes[0].toLowerCase()
      ) {
        return "♟";
      } else if (
        cell.getPiece()!.constructor.name.toLowerCase() ===
        PieceTypes[1].toLowerCase()
      ) {
        return "♜";
      } else if (
        cell.getPiece()!.constructor.name.toLowerCase() ===
        PieceTypes[2].toLowerCase()
      ) {
        return "♞";
      } else if (
        cell.getPiece()!.constructor.name.toLowerCase() ===
        PieceTypes[3].toLowerCase()
      ) {
        return "♝";
      } else if (
        cell.getPiece()!.constructor.name.toLowerCase() ===
        PieceTypes[4].toLowerCase()
      ) {
        return "♛";
      } else if (
        cell.getPiece()!.constructor.name.toLowerCase() ===
        PieceTypes[5].toLowerCase()
      ) {
        return "♚";
      }
    }
  }
}

function App() {
  const [startCell, setStartCell] = useState<Cell | null>(null);
  const [endCell, setEndCells] = useState<Array<Cell> | null>(null);
  const [game, setGame] = useState<Game>();
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false)

  useEffect(() => {
    setGame(new Game());
  }, []);

  useEffect(() => {
    if (game?.getStatus() === "WHITE WIN") {
      setGameOver(true);
    } else if (game?.getStatus() === "BLACK WIN") {
      setGameOver(true);
    }
  }, [game]);


  const clickCell = (cell: Cell, game: Game) => {
    if (cell.piece?.isWhite() === game!["currentTurn"]!.isWhiteSide()) {
      let potentialPieces: any = [];
      let board = game["board"];
      let player: Player = game!["currentTurn"];

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          if (cell.getPiece()?.canMove(board, cell, board.board[i][j]) === true)
            potentialPieces.push(board.board[i][j]);
        }
      }

      setEndCells(potentialPieces);
      setStartCell(cell);
    } else if (startCell !== null) {
      let player = game!["currentTurn"]!;
      let newGame: Game = Object.assign(game!);
      newGame.playerMove(
        player,
        startCell!.getX(),
        startCell!.getY(),
        cell.x,
        cell.y
      );
      setStartCell(null);
      setEndCells([]);
      setGame(newGame);
    }
  };

  return (
    <div className="App" style={{}}>
      <h2>Chess</h2>
      {game === undefined || game.isEnd() === true ? (
        <>
          <div>{}</div>
          <div
            onClick={() => {
              setGame(new Game());
              setGameOver(false);
            }}
          >
            New Game
          </div>
        </>
      ) : (
        <>
          <div>
            Turn: {game!["currentTurn"].constructor.name.substring(0, 5)}
          </div>
          <div
            style={{
              display: "flex",
              height: "90vh",
              width: "100vw",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{}}>
              {game!["board"].board.map((row: any, i: number) => (
                <div key={i} style={{ display: "flex" }}>
                  {row.map((cell: any, j: number) => (
                    <div
                      key={j}
                      style={{
                        height: 75,
                        width: 75,
                        backgroundColor: getColor(
                          i,
                          j,
                          game!,
                          endCell,
                        )[1],
                        border: `${
                          getColor(i, j, game!, endCell)[0]
                        } solid 2px`,
                        fontSize: 55,
                      }}
                      onClick={() => clickCell(cell, game!)}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        setEndCells([cell]);
                      }}
                    >
                      {displayPiece(cell)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {JSON.stringify(endCell, null, 2)}
        </>
      )}
    </div>
  );
}

export default App;
