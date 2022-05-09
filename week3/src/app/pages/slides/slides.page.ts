import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  data =[
    {
      "description":"Lady with a red umbrella",
      "image":"https://picsum.photos/400/400?random=1"
    },
    {
      "description":"Flowers and some fruits",
      "image":"https://picsum.photos/400/400?random=2"
    },
    {
      "description":"Beautiful scenery",
      "image":"https://picsum.photos/400/400?random=3"
    },
    {
      "description":"Some kind of bird",
      "image":"https://picsum.photos/400/400?random=4"
    },
    {
      "description":"The attack of dragons",
      "image":"https://picsum.photos/400/400?random=5"
    },
    {
      "description":"Lady with a red umbrella",
      "image":"https://picsum.photos/400/400?random=6"
    },
    {
      "description":"Flowers and some fruits",
      "image":"https://picsum.photos/400/400?random=7"
    },
    {
      "description":"Beautiful scenery",
      "image":"https://picsum.photos/400/400?random=8"
    },
    {
      "description":"Some kind of bird",
      "image":"https://picsum.photos/400/400?random=9"
    },
    {
      "description":"The attack of dragons",
      "image":"https://picsum.photos/400/400?random=10"
    },
    {
      "description":"Lady with a red umbrella",
      "image":"https://picsum.photos/400/400?random=11"
    },
    {
      "description":"Flowers and some fruits",
      "image":"https://picsum.photos/400/400?random=12"
    },
    {
      "description":"Beautiful scenery",
      "image":"https://picsum.photos/400/400?random=13"
    },
    {
      "description":"Some kind of bird",
      "image":"https://picsum.photos/400/400?random=14"
    },
    {
      "description":"The attack of dragons",
      "image":"https://picsum.photos/400/400?random=15"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
