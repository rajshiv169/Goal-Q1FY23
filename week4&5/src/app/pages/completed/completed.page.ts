import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],
})
export class CompletedPage implements OnInit {

  todoList: any;
  constructor(
    private storageService: StorageService,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getList();
  }

  async getList() {
    const list = await this.storage.get('todo') || [];
    console.log(list);
    if(list) this.todoList = list.filter(item => item.isCompleted && !item.isCancelled);
    else this.todoList = [];
  }
}
