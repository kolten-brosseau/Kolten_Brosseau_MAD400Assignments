import { IContent } from "./icontent";

export class ContentList {
  private _chess: IContent[];

  constructor() {
    this._chess = [];
  }

  getChess() {
    return this._chess;
  }

  addChess(chessToAdd: IContent): void {
    this._chess.push(chessToAdd);
  }

  getLength() {
    return this._chess.length;
  }

  toString(num: number) {
    let indexedItem: IContent = this._chess[num];
    let tags = indexedItem.tags!;

    let stringToOutput = "<h1>".concat(indexedItem.title, "</h1><br>", "<h2>Description: ", indexedItem.description!, "</h2><br><h2>Author: ", indexedItem.author, "</h2><br><img src='", indexedItem.imgSrc!, "'/><br>", "<h2>Type: ", indexedItem.type, "</h2><br><h2>Tags: </h2><br>");

    for (let i = 0; i < tags?.length; i++) {
      stringToOutput.concat("<ul>", tags[i], "</ul>");
    }
  }
}
