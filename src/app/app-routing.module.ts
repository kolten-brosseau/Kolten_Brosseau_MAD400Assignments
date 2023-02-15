import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ContentList } from './models/content-list';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class AppRoutingModule { 
   
}

const routes: Routes = [
    {
      path: "/content",
      component: ContentList 
    },
    {
      path: "",
      redirectTo: "/content",
      pathMatch: 'full'
    },
    {
      path: "/content/"
    }
]


