import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  todoList: any = [];
  today: number = Date.now();
  constructor(
    private storageService: StorageService,
    private router: Router,
    private storage: Storage
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getList();
  }

  async getList() {
    this.todoList = await this.storage.get('todo') || [];
  }

  add() {
    this.router.navigate(['add']);
  }

  async completed(index) {
    this.todoList[index].isCompleted = 1;
    await this.storageService.set(this.todoList);
    this.getList();
  }

  async cancelled(index) {
    this.todoList[index].isCancelled = 1;
    await this.storageService.set(this.todoList);
    this.getList();
  }

  update(id) {
    this.router.navigate(['update', id]);
  }

}
