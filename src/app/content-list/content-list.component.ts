import { Component } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  playersArray: IContent[];

  constructor() {
    this.playersArray = [{
      id: 0,
      title: "Magnus Carlsen",
      author: "Kolten Brosseau",
      type: "Person"
    },
    {
      id: 1,
      title: "Anish Giri",
      author: "Kolten Brosseau",
      type: "Person"
    },
    {
      id: 2,
      title: "Hikaru Nakumara",
      author: "Kolten Brosseau",
      type: "Person"
    },
    {
      id: 3,
      title: "Gary Kasparov",
      author: "Kolten Brosseau",
      type: "Person"
    }];
  }

}
