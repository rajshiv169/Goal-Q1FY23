import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy, AfterViewInit, AfterContentInit {

  constructor(
    private navCtrl: NavController,
    private router: Router) {}

  ngOnInit(): void {
    console.log("Connect - ngOnInit");
  }

  ngAfterViewInit(): void {
    console.log("Connect - ngAfterViewInit");
  }

  ngAfterContentInit(): void {
    console.log("Connect - ngAfterContentInit");
  }

  ngOnDestroy(): void {
    console.log("Connect - ngOnDestory");
  }

  ionViewWillEnter(): void {
    console.log("Connect - ionViewWillEnter");
  }

  ionViewDidEnter(): void {
    console.log("Connect - ionViewDidEnter");
  }

  ionViewWillLeave(): void {
    console.log("Connect - ionViewWillLeave");
  }

  ionViewDidLeave(): void {
    console.log("Connect - ionViewDidLeave");
  }

  gotoHome() {
    this.router.navigate(['tabs/tab1'], { replaceUrl: true });
  }
}
