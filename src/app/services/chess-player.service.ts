import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { playersArray } from '../data/mock-content';
import { IContent } from '../models/icontent';


@Injectable({
  providedIn: 'root'
})
export class ChessPlayerService {

  constructor() { }

  
getContent(): Observable<IContent[]>{
  return of(playersArray);
}

getIndex(idNum: number): Observable<IContent>{
  let playerFound: IContent = {
    id: -1,
    title: "DUMMY",
    author: "DUMMY",
    type: "DUMMY"
  }
  playersArray.find(player => {
    if(player.id == idNum){
      playerFound = player
    }
  }
  );
  return of(playerFound);
}

addItem(newItem: IContent){
  playersArray.push(newItem);
  return of(playersArray);
}

updateItem(itemToUpdate: IContent){
    playersArray.forEach(player=>{
    if(player.id = itemToUpdate.id){
      player = itemToUpdate;
    }
  })
  return of(playersArray);
}

removeItem(idNum: number){
  var itemDeleted;
  playersArray.forEach(player=>{
    if(player.id = idNum){
      itemDeleted = player;
      delete playersArray[itemDeleted.id];
    }
  })
  return of(itemDeleted);
}

}
