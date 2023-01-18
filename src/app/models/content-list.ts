import { IContent } from "./icontent";

export class ContentList {
  private _chess: IContent[];

  constructor(chess: IContent) {
    this._chess = [];
  }

  getChess() {
    return this._chess;
  }

  addChess(chessToAdd: IContent) {
    this._chess.push(chessToAdd);
  }

  getLength() {
    return this._chess.length;
  }
}
