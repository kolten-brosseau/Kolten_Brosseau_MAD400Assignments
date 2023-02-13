import { Component, NgModule, OnInit } from '@angular/core';
import { playersArray } from '../data/mock-content';
import { IContent } from '../models/icontent';
import { ChessPlayerService } from '../services/chess-player.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit{

  ChessPlayers: IContent[] = [];

  constructor(private service: ChessPlayerService){
    
  } 
  
  ngOnInit(){
    this.service.getContent().subscribe(ChessPlayers => this.ChessPlayers = playersArray);
  }

}
