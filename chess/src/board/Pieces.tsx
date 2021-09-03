import React from 'react'

// interface IPieces {

// }

interface IPiece{
    row: number,
    col: string,
    type: string
}


export const Pieces = (row:number, col:string, type:string) => {
    
    let pawn:IPiece = {
        row: row,
        col: col,
        type: type
    }
    return pawn
}
