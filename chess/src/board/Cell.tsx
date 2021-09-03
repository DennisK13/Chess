import React, {useState} from "react";
import {validMoves} from './util'
interface Props {
  cell: any;
  setBoard: any;
  board: any;
  pieces: Array<any>;
  setCellState: any;
  cellState:any;
  originalCells: any;
  setOriginalCells:any
}

export const Cell = ({ cell, setBoard, board, pieces, setCellState, cellState, originalCells, setOriginalCells}: Props) => {
  
  React.useEffect(() => {
    checkPiece(cell, pieces,board)
  }, [])

  // function onHover(board: any, cell: any) {
  //   cell.border = "yellow";
  //   setBoard([...board]);
  // }

  // function offHover(board: any, cell: any) {
  //   cell.border = "black";
  //   setBoard([...board]);
  // }

  function movePiece(board: any, cell: any, setBoard:any){
   

    if(originalCells.length === 0){
      let valid = validMoves(board,cell);
      if(valid !== undefined && valid[0]?.piece === '♙')
      {
        setOriginalCells([cell, valid])
        setCellState([cell, valid])
      }
      else{
        setOriginalCells([cell, valid])
        setCellState([cell, valid])
      }
    }
    else if(originalCells[0].piece === '♙'){
      cellState[1].forEach((item:any) => {
        let index = board[item.row].indexOf(item)
        console.log(index)
        if(item.row % 2 === index % 2){
          item.color = 'white'
        }
        else{
          item.color = 'brown'
        }
      })
     if(cellState[1].includes(cell) && cellState[0] !== cell){
          cell.piece = '♙';
          cellState[0].piece = null;
          setBoard([...board])
          setOriginalCells([])
          setCellState([])
      }
      else{
        setOriginalCells([])
        setCellState([])
      }

    }
    else if(originalCells[0].piece === '♗'){
      cellState[1].forEach((item:any) => {
        let index = board[item.row].indexOf(item)
        console.log(index)
        if(item.row % 2 === index % 2){
          item.color = 'white'
        }
        else{
          item.color = 'brown'
        }
      })
      if(cellState[1].includes(cell) && cellState[0] !== cell){
        cell.piece = '♗'
        cellState[0].piece = null;
        setBoard([...board])
        setOriginalCells([])
        setCellState([])
      }
      else{
        setOriginalCells([])
        setCellState([])
      }

    }
    else if(originalCells[0].piece === '♘'){
      cellState[1].forEach((item:any) => {
        let index = board[item.row].indexOf(item)
        console.log(index)
        if(item.row % 2 === index % 2){
          item.color = 'white'
        }
        else{
          item.color = 'brown'
        }
      })
      if(cellState[1].includes(cell) && cellState[0] !== cell){
        cell.piece = '♘';
        cellState[0].piece = null;
        setBoard([...board])
        setOriginalCells([])
        setCellState([])
      }
      else{
        setOriginalCells([])
        setCellState([])
      }
    }
    else if(originalCells[0].piece === '♖'){
      cellState[1].forEach((item:any) => {
        let index = board[item.row].indexOf(item)
        console.log(index)
        if(item.row % 2 === index % 2){
          item.color = 'white'
        }
        else{
          item.color = 'brown'
        }
      })
      if(cellState[1].includes(cell) && cellState[0] !== cell){
        cell.piece = '♖';
        cellState[0].piece = null;
        setBoard([...board])
        setOriginalCells([])
        setCellState([])
      }
      else{
        setOriginalCells([])
        setCellState([])
      }
    }
    else{
      setOriginalCells([])
      setCellState([])
    }
    }
    
  function checkPiece(cell: any, pieces: any,board:any) {
    for (let i = 0; i < pieces.length; i++) {
      for(let j = 0; j<pieces[i].length; j++)
      {
          if(cell.row === pieces[i][j].row && cell.col === pieces[i][j].col){
             cell.piece = pieces[i][j].type[0]
          }
      }
    }
    setBoard([...board])
  }

  return (
    <div
      className="cell"
      style={{ backgroundColor: cell.color, borderColor: cell.border, color:'black'}}
      // onMouseOver={() => onHover(board, cell)}
      // onMouseLeave={() => offHover(board, cell)}
      onClick={() => movePiece(board,cell, setBoard)}
    >
      {cell.piece}
    </div>
  );
};
