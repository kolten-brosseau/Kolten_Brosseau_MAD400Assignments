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

}
