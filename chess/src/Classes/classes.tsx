export class Cell {
    piece: Piece | null;
    x: number;
    y: number;
  
    constructor(x: number, y: number, piece: Piece | null) {
      this.piece = piece;
      this.x = x;
      this.y = y;
    }
  
    getPiece() {
      return this.piece;
    }
  
    setPiece(p: Piece | null) {
      this.piece = p;
    }
  
    getX() {
      return this.x;
    }
  
    setX(x: number) {
      this.x = x;
    }
  
    getY() {
      return this.y;
    }
  
    setY(y: number) {
      this.y = y;
    }
  }
  
  abstract class Piece {
    killed = false;
    white = false;
    constructor(white: boolean) {
      this.setWhite(white);
    }
  
    isWhite() {
      return this.white;
    }
  
    setWhite(white: boolean) {
      this.white = white;
    }
  
    isKilled(killed: boolean) {
      return this.killed;
    }
  
    setKilled(killed: boolean) {
      this.killed = killed;
    }
  
    abstract canMove(board: Board, cellStart: Cell, cellEnd: Cell): boolean;
  }
  
  class Pawn extends Piece {
    canMove(board: Board, start: Cell, end: Cell) {
      if (end.getPiece()?.isWhite() === this.isWhite()) {
        return false;
      }
      let x = start.getX();
      let y = start.getY();
      // down
      if (!this.isWhite()) {
        if (x === 1) {
          if (
            x + 1 === end.getX() &&
            y === end.getY() &&
            board["board"][end.getX()][end.getY()].getPiece() === null
          ) {
            return true;
          } else if (
            x + 2 === end.getX() &&
            y === end.getY() &&
            board["board"][end.getX()][end.getY()].getPiece() === null
          ) {
            return true;
          } else if (
            x + 1 === end.getX() &&
            y + 1 === end.getY() &&
            board["board"][end.getX()][end.getY()].getPiece() !== null
          ) {
            return true;
          } else if (
            x + 1 === end.getX() &&
            y - 1 === end.getY() &&
            board["board"][end.getX()][end.getY()].getPiece() !== null
          ) {
            return true;
          } else {
            return false;
          }
        } else {
          if (
            x + 1 === end.getX() &&
            y === end.getY() &&
            board["board"][end.getX()][end.getY()].getPiece() === null
          ) {
            return true;
          } else if (
            x + 1 === end.getX() &&
            y + 1 === end.getY() &&
            board["board"][end.getX()][end.getY()].getPiece() !== null
          ) {
            return true;
          } else if (
            x + 1 === end.getX() &&
            y - 1 === end.getY() &&
            board["board"][end.getX()][end.getY()].getPiece() !== null
          ) {
            return true;
          } else {
            return false;
          }
        }
      } else {
        if (x === 6) {
          if (
            x - 1 === end.getX() &&
            y === end.getY() &&
            board["board"][end.getX()][end.getY()].getPiece() === null
          ) {
            return true;
          } else if (
            x - 2 === end.getX() &&
            y === end.getY() &&
            board["board"][end.getX()][end.getY()].getPiece() === null
          ) {
            return true;
          } else if (
            x - 1 === end.getX() &&
            y + 1 === end.getY() &&
            board["board"][end.getX()][end.getY()].getPiece() !== null
          ) {
            return true;
          } else if (
            x - 1 === end.getX() &&
            y - 1 === end.getY() &&
            board["board"][end.getX()][end.getY()].getPiece() !== null
          ) {
            return true;
          } else {
            return false;
          }
        } else {
          if (
            x - 1 === end.getX() &&
            y === end.getY() &&
            board["board"][end.getX()][end.getY()].getPiece() === null
          ) {
            return true;
          } else if (
            x - 1 === end.getX() &&
            y + 1 === end.getY() &&
            board["board"][end.getX()][end.getY()].getPiece() !== null
          ) {
            return true;
          } else if (
            x - 1 === end.getX() &&
            y - 1 === end.getY() &&
            board["board"][end.getX()][end.getY()].getPiece() !== null
          ) {
            return true;
          } else {
            return false;
          }
        }
      }
    }
  }
  
  class Rook extends Piece {
     
  
    canMove(board: Board, start: Cell, end: Cell) {
      let potential = [];
      if (end.getPiece()?.isWhite() === this.isWhite()) {
        return false;
      }
      // right
      for (let i = start.getY() + 1; i < board.board[0].length; i++) {
        if (board["board"][start.getX()][i].piece === null) {
          potential.push(board["board"][start.getX()][i]);
        } else {
          potential.push(board["board"][start.getX()][i]);
          break;
        }
      }
  
      // left
      for (let i = start.getY() - 1; i >= 0; i--) {
        if (board["board"][start.getX()][i].piece === null) {
          potential.push(board["board"][start.getX()][i]);
        } else {
          potential.push(board["board"][start.getX()][i]);
          break;
        }
      }
      // down
      for (let i = start.getX() + 1; i < board.board.length; i++) {
        if (board["board"][i][start.getY()].piece === null) {
          potential.push(board["board"][i][start.getY()]);
        } else {
          potential.push(board["board"][i][start.getY()]);
          break;
        }
      }
      // up
      for (let i = start.getX() - 1; i >= 0; i--) {
        if (board["board"][i][start.getY()].piece === null) {
          potential.push(board["board"][i][start.getY()]);
        } else {
          potential.push(board["board"][i][start.getY()]);
          break;
        }
      }
      if(end === potential[potential.indexOf(end)]){
        
          return end === potential[potential.indexOf(end)];
      }
  
      return false;
    }
  }
  
  class Knight extends Piece {
    canMove(board: Board, start: Cell, end: Cell) {
      if (end.getPiece()?.isWhite() === this.isWhite()) {
        return false;
      }
      let x = Math.abs(start.getX() - end.getX());
      let y = Math.abs(start.getY() - end.getY());
      return x * y === 2;
    }
  }
  
  class Bishop extends Piece {
    canMove(board: Board, start: Cell, end: Cell) {
      let potential = [];
      if (end.getPiece()?.isWhite() === this.isWhite()) {
        return false;
      }
      let y = start.getY();
      let x = start.getX();
      for (
        let i = start.getY() + 1, j = start.getX() - 1;
        i < board["board"][0].length && j >= 0;
        i++, j--
      ) {
        if (board["board"][j][i].piece === null) {
          potential.push(board["board"][j][i]);
        } else {
          potential.push(board["board"][j][i]);
          break;
        }
      }
      for (
        let i = y - 1, j = x + 1;
        i >= 0 && j < board["board"].length;
        i--, j++
      ) {
        if (board["board"][j][i].piece === null) {
          potential.push(board["board"][j][i]);
        } else {
          potential.push(board["board"][j][i]);
          break;
        }
      }
      for (
        let i = y + 1, j = x + 1;
        i < board["board"][0].length && j < board["board"].length;
        i++, j++
      ) {
        if (board["board"][j][i].piece === null) {
          potential.push(board["board"][j][i]);
        } else {
          potential.push(board["board"][j][i]);
          break;
        }
      }
      for (let i = y - 1, j = x - 1; i >= 0 && j >= 0; i--, j--) {
        if (board["board"][j][i].piece === null) {
          potential.push(board["board"][j][i]);
        } else {
          potential.push(board["board"][j][i]);
          break;
        }
      }
      return end === potential[potential.indexOf(end)];
    }
  }
  
  class Queen extends Piece {
    canMove(board: Board, start: Cell, end: Cell) {
      let potential = [];
  
      if (end.getPiece()?.isWhite() === this.isWhite()) {
        return false;
      }
      let y = start.getY();
      let x = start.getX();
  
      // Rook Movement
  
      for (let i = start.getY() + 1; i < board.board[0].length; i++) {
        if (board["board"][start.getX()][i].piece === null) {
          potential.push(board["board"][start.getX()][i]);
        } else {
          potential.push(board["board"][start.getX()][i]);
          break;
        }
      }
  
      // left
      for (let i = start.getY() - 1; i >= 0; i--) {
        if (board["board"][start.getX()][i].piece === null) {
          potential.push(board["board"][start.getX()][i]);
        } else {
          potential.push(board["board"][start.getX()][i]);
          break;
        }
      }
      // down
      for (let i = start.getX() + 1; i < board.board.length; i++) {
        if (board["board"][i][start.getY()].piece === null) {
          potential.push(board["board"][i][start.getY()]);
        } else {
          potential.push(board["board"][i][start.getY()]);
          break;
        }
      }
      // up
      for (let i = start.getX() - 1; i >= 0; i--) {
        if (board["board"][i][start.getY()].piece === null) {
          potential.push(board["board"][i][start.getY()]);
        } else {
          potential.push(board["board"][i][start.getY()]);
          break;
        }
      }
  
      // Bishop Movement
      for (
        let i = start.getY() + 1, j = start.getX() - 1;
        i < board["board"][0].length && j >= 0;
        i++, j--
      ) {
        if (board["board"][j][i].piece === null) {
          potential.push(board["board"][j][i]);
        } else {
          potential.push(board["board"][j][i]);
          break;
        }
      }
      for (
        let i = y - 1, j = x + 1;
        i >= 0 && j < board["board"].length;
        i--, j++
      ) {
        if (board["board"][j][i].piece === null) {
          potential.push(board["board"][j][i]);
        } else {
          potential.push(board["board"][j][i]);
          break;
        }
      }
      for (
        let i = y + 1, j = x + 1;
        i < board["board"][0].length && j < board["board"].length;
        i++, j++
      ) {
        if (board["board"][j][i].piece === null) {
          potential.push(board["board"][j][i]);
        } else {
          potential.push(board["board"][j][i]);
          break;
        }
      }
      for (let i = y - 1, j = x - 1; i >= 0 && j >= 0; i--, j--) {
        if (board["board"][j][i].piece === null) {
          potential.push(board["board"][j][i]);
        } else {
          potential.push(board["board"][j][i]);
          break;
        }
      }
      return end === potential[potential.indexOf(end)];
    }
  }
  
  class King extends Piece {
    castlingDone = false;
  
    isCastlingDone() {
      return this.castlingDone;
    }
  
    setCastlingDone(castlingDone: boolean) {
      return castlingDone;
    }
    isValidCastling(board: Board, start: Cell, end: Cell): boolean {
      if (this.isCastlingDone()) {
        return false;
      }
      // castleing logic
      if (start.getPiece()?.isWhite()) {
      return false;
      }
  
      // if(start.getPiece()){
        
      // }
      else{
          return false;
      }
    }
  
    isCastlingMove(start: Cell, end: Cell) {
      // check if the start and end positions are correct
      if(start instanceof King && end instanceof Rook)
      {
        console.log(true)
        return true
      }
      return false;
    }
  
    canMove(board: Board, start: Cell, end: Cell) {
      if (end.getPiece()?.isWhite() === this.isWhite()) {
        return false;
      }
      let x = Math.abs(start.getX() - end.getX());
      let y = Math.abs(start.getY() - end.getY());
  
      if (x + y === 1) {
        // Check to see if this move will result in the
        // king getting attacked.
        // this.setCastlingDone(true);
        // if(!this.isCastlingDone()){
         
        // }
        return true;
      } 
      else if(x + y === 2 && x*y !==0){
        return true;
      }
     
      return false;
    }
  }
  
  export class Board {
    board: Cell[][];
    constructor() {
      this.board = this.createBoard();
      this.resetBoard();
    }
  
    getBoard(x: number, y: number) {
      if (x < 0 || x > 7 || y < 0 || y > 7) {
      }
      return this.board[x][y];
    }
  
    createBoard() {
      let b = [];
      for (let i = 0; i < 8; i++) {
        let row = [];
        for (let j = 0; j < 8; j++) {
          row.push(new Cell(i, j, null));
        }
        b.push(row);
      }
      return b;
    }
    resetBoard() {
      // White Pieces
      this.board[0][0] = new Cell(0, 0, new Rook(false));
      this.board[0][1] = new Cell(0, 1, new Knight(false));
      this.board[0][2] = new Cell(0, 2, new Bishop(false));
      this.board[0][3] = new Cell(0, 3, new Queen(false));
      this.board[0][4] = new Cell(0, 4, new King(false));
      this.board[0][5] = new Cell(0, 5, new Bishop(false));
      this.board[0][6] = new Cell(0, 6, new Knight(false));
      this.board[0][7] = new Cell(0, 7, new Rook(false));
  
      for (let i = 0; i < 8; i++) {
        this.board[1][i] = new Cell(1, i, new Pawn(false));
      }
  
      // Black Pieces
      this.board[7][0] = new Cell(7, 0, new Rook(true));
      this.board[7][1] = new Cell(7, 1, new Knight(true));
      this.board[7][2] = new Cell(7, 2, new Bishop(true));
      this.board[7][3] = new Cell(7, 3, new Queen(true));
      this.board[7][4] = new Cell(7, 4, new King(true));
      this.board[7][5] = new Cell(7, 5, new Bishop(true));
      this.board[7][6] = new Cell(7, 6, new Knight(true));
      this.board[7][7] = new Cell(7, 7, new Rook(true));
      for (let i = 0; i < 8; i++) {
        this.board[6][i] = new Cell(6, i, new Pawn(true));
      }
    }
  }
  
  export abstract class Player {
    whiteSide: boolean;
    humanPlayer: boolean;
  
    constructor(whiteSide: boolean, humanPlayer: boolean) {
      this.whiteSide = whiteSide;
      this.humanPlayer = humanPlayer;
    }
    isWhiteSide() {
      return this.whiteSide;
    }
    isHumanPlayer() {
      return this.humanPlayer;
    }
  }
  
  export class WhitePiecesPlayer extends Player {
    constructor(whiteSide: boolean) {
      super(whiteSide, true);
    }
  }
  
  export class BlackPiecesPlayer extends Player {
    constructor(whiteSide: boolean) {
      super(whiteSide, false);
    }
  }
  
  class Move {
    private player: Player;
    private start: Cell;
    private end: Cell;
    private pieceMoved: Piece | null;
    private pieceKilled: Piece | null;
    private castlingMove = false;
  
    constructor(player: Player, start: Cell, end: Cell, pieceKilled = null) {
      this.player = player;
      this.start = start;
      this.end = end;
      this.pieceMoved = start.getPiece();
      this.pieceKilled = pieceKilled;
    }
  
    isCastlingMove() {
      console.log(this.isCastlingMove)
      return this.castlingMove;
    }
    setCastlingMove(castlingMove: boolean) {
      this.castlingMove = castlingMove;
    }
    getStart() {
      return this.start;
    }
    getEnd() {
      return this.end;
    }
    setPieceKilled(pieceKilled: Piece) {
      this.pieceKilled = pieceKilled;
    }
    check(){
      
    }
  }
  
  enum GameStatus {
    INACTIVE = "INACTIVE",
    ACTIVE = "ACTIVE",
    BLACK_WIN = "BLACK WIN",
    WHITE_WIN = "WHITE WIN",
    FORFEIT = "FORFEIT",
    STALEMATE = "STALEMATE",
    RESIGNATION = "RESIGNATION",
  }
  
  export enum PieceTypes {
    PAWN,
    ROOK,
    KNIGHT,
    BISHOP,
    QUEEN,
    KING,
  }
  
  export class Game {
    private players: Player[] = [];
    private board: Board;
    private currentTurn: Player;
    private status: GameStatus;
    private movesPlayed: Array<Move> = [];
  
    constructor() {
      this.board = new Board();
      this.status = GameStatus.INACTIVE;
      this.initialize(new WhitePiecesPlayer(true), new BlackPiecesPlayer(false));
      this.currentTurn = this.players[0]
    }
    initialize(p1: Player, p2: Player) {
      this.players.push(p1);
      this.players.push(p2);
  
      this.board.resetBoard();
  
      if (p1.isWhiteSide()) {
        this.currentTurn = p1;
      } else {
        this.currentTurn = p2;
      }
      this.movesPlayed = [];
      this.status = GameStatus.ACTIVE;
    }
  
    getStatus() {
      return this.status;
    }
  
    setStatus(status: GameStatus) {
      this.status = status;
    }
  
    isEnd() {
      return this.getStatus() !== GameStatus.ACTIVE;
    }
  
    playerMove(
      player: Player,
      startX: number,
      startY: number,
      endX: number,
      endY: number
    ) {
      let startCell = this.board.getBoard(startX, startY);
      let endCell = this.board.getBoard(endX, endY);
      let move = new Move(player, startCell, endCell);
  
      return this.makeMove(this.board, move, player);
    }
  
    makeMove(board: Board, move: Move, player: Player) {
      let sourcePiece = move.getStart().getPiece();
      let start = move.getStart();
      let end = move.getEnd();
  
      if (sourcePiece === null) {
        return false;
      }
      if (player !== this.currentTurn) {
        return false;
      }
      if (!sourcePiece?.canMove(board, start, end)) {
        return false;
      }
  
      // // kill?
      let destPiece = move.getEnd().getPiece();
      if (destPiece !== null) {
        destPiece.setKilled(true);
        move.setPieceKilled(destPiece);
      }
      move.getEnd().setPiece(move.getStart().getPiece());
      move.getStart().setPiece(null);
      // // castling
      if (
        sourcePiece !== null &&
        sourcePiece instanceof King &&
        sourcePiece.isCastlingMove(start, end)
      ) {
        move.setCastlingMove(true);
      }
      // // store the move
      this.movesPlayed.push(move);
  
      // // move piece from the start box to end box
      // move.getEnd().setPiece(move.getStart().getPiece());
      // move.getStart().setPiece(null);
  
      // // game over condition
      if (destPiece !== null && destPiece instanceof King) {
        if (player.isWhiteSide()) {
          this.setStatus(GameStatus.WHITE_WIN);
        } else {
          this.setStatus(GameStatus.BLACK_WIN);
        }
      }
      // // set the current turn
      if (this.currentTurn === this.players[0]) {
        this.currentTurn = this.players[1];
      } else {
        this.currentTurn = this.players[0];
      }
      return true;
    }
  }
  