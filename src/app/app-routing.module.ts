import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentList } from './models/content-list';
import { ContentListComponent } from './content-list/content-list.component';
import { IContentDetailsComponent } from './icontent-details/icontent-details.component';

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




