import { Component, OnInit } from '@angular/core';
import { IContent } from './models/icontent';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListItemComponent } from './content-list-item/content-list-item.component';
import { ChessPlayerService } from './services/chess-player.service';
import { AppRoutingModule } from './app-routing.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  singlePlayer? : IContent;
  constructor(private service: ChessPlayerService){

  } 

  ngOnInit(): void{
    this.service.getIndex(1).subscribe((player: IContent)=>{
      this.singlePlayer = player
    });
  }

//service.getIndex(1)

  }

 


