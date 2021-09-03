import React, { useState } from "react";
import { createBoard } from "./util";
import { Cell } from "./Cell";
import { Pieces } from "./Pieces";

export const Board = () => {
  const [board, setBoard] = useState(createBoard());
  const [cellState, setCellState] = useState([]);
  const [originalCells, setOriginalCells] = useState<Array<any>>([])
  const createPieces = (
    row: number,
    type = "♙",
    length = 8,
    alpha = ["a", "b", "c", "d", "e", "f", "g", "h"]
  ) => {
    let pawnPieces = [];
    for (let i = 0; i < length; i++) {
      let pawn = Pieces(row, alpha[i], type);
      pawnPieces.push(pawn);
    }
    return pawnPieces;
  };
  let types = [{name:'pawn',type:'♙'}, {name:'bishop', type:'♗'}, {name:'knight', type:'♘'}, {name:'rook', type:'♖'}, {name:'queen', type:'♕'}, {name:'king', type:'♔'}]
  let p1pawns = createPieces(1);
  let p2pawns = createPieces(6);
  let p1bishops = createPieces(0, "♗", 2, ["c", "f"]);
  let p2bishops = createPieces(7, "♗", 2, ["c", "f"]);
  let p1knight = createPieces(0, "♘", 2, ["b", "g"]);
  let p2knight = createPieces(7, "♘", 2, ["b", "g"]);
  let p1rook = createPieces(0, "♖", 2, ["a", "h"]);
  let p2rook = createPieces(7, "♖", 2, ["a", "h"]);
  let p1queen = createPieces(0,'♕',1,['e'])
  let p2queen = createPieces(7,'♕',1,['e'])
  let p1king = createPieces(0,'♔', 1, ['d'])
  let p2king = createPieces(7,'♔', 1, ['d'])
  let p1Pieces = [
    p1pawns,
    p2pawns,
    p1bishops,
    p2bishops,
    p1knight,
    p2knight,
    p1rook,
    p2rook,
    p1queen,
    p2queen,
    p1king,
    p2king
  ];
  return (
    <div>
      {board.map((row, i) => (
        <div className="row" key={i}>
          {" "}
          {row.map((cell, i) => (
            <Cell
              board={board}
              setBoard={setBoard}
              cell={cell}
              pieces={p1Pieces}
              setCellState={setCellState}
              cellState={cellState}
              setOriginalCells = {setOriginalCells}
              originalCells = {originalCells}
              key={i}
            />
          ))}
        </div>
      ))}
      {JSON.stringify(cellState, null, 2)}
    </div>
  );
};
