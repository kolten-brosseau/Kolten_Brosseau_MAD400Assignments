import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentList } from './models/content-list';
import { ContentListComponent } from './content-list/content-list.component';
import { IContentDetailsComponent } from './icontent-details/icontent-details.component';
import { ContentListItemSearchComponent } from './content-list-item-search/content-list-item-search.component';
import { ChessPlayerService } from './services/chess-player.service';
import {IContent} from './models/icontent';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/content",
    pathMatch: 'full'
  },
  {
    path: "content",
    component: ContentListComponent 
  },
  {
    path: "content/:id",
    component: IContentDetailsComponent
  },
  {
    path: "content/search",
    component: ContentListItemSearchComponent
  }
  
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  


}




