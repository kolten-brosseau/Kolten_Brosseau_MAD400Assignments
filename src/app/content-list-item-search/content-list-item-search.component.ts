import { Component } from '@angular/core';
import { ChessPlayerService } from '../services/chess-player.service';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list-item-search',
  templateUrl: './content-list-item-search.component.html',
  styleUrls: ['./content-list-item-search.component.scss']
})
export class ContentListItemSearchComponent {
  singlePlayer? : IContent;
  constructor(private service: ChessPlayerService){

  } 

  ngOnInit(): void{
    this.service.getIndex(1).subscribe((player: IContent)=>{
      this.singlePlayer = player
    });
  }

  

}
