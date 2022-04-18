import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {

  constructor() {}

  ngOnInit(): void {
    console.log("Home - ngOnInit");
  }

  ngAfterViewInit(): void {
    console.log("Home - ngAfterViewInit");
  }

  ngAfterContentInit(): void {
    console.log("Home - ngAfterContentInit");
  }

  ngOnDestroy(): void {
    console.log("Home - ngOnDestory");
  }

  ionViewWillEnter(): void {
    console.log("Home - ionViewWillEnter");
  }

  ionViewDidEnter(): void {
    console.log("Home - ionViewDidEnter");
  }

  ionViewWillLeave(): void {
    console.log("Home - ionViewWillLeave");
  }

  ionViewDidLeave(): void {
    console.log("Home - ionViewDidLeave");
  }
}
