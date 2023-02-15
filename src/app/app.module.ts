import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentListItemComponent } from './content-list-item/content-list-item.component';
import { IContentDetailsComponent } from './icontent-details/icontent-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentListItemSearchComponent } from './content-list-item-search/content-list-item-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentListItemComponent,
    IContentDetailsComponent,
    ContentListItemSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
