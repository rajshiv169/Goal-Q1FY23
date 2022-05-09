import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items = [{
    "name": "hero Product",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "hero": "OMG This just came out today!",
    "image": "https://picsum.photos/400/400?random=10",
    "index": 1
  },{
    "name": "Product 1",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "info": "This is the latest and greatest product from Derp corp.",
    "image": "https://picsum.photos/400/400?random=1",
    "index": 2
  },{
    "name": "Product 2",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "offer": "BOGOF",
    "image": "https://picsum.photos/400/400?random=2",
    "index": 3
  },{
    "name": "Product 3",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": "https://picsum.photos/400/400?random=3"
  },{
    "name": "Product 4",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "offer": "No srsly GTFO",
    "image": "https://picsum.photos/400/400?random=4",
    "index": 4
  },{
    "name": "Product 5",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": "https://picsum.photos/400/400?random=5",
    "index": 5
  },{
    "name": "Product 6",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "info": "This is the latest and greatest product from Derp corp.",
    "offer": "info with offer",
    "image": "https://picsum.photos/400/400?random=6",
    "index": 6
  }]
  constructor() { }

  ngOnInit() {
  }

}
