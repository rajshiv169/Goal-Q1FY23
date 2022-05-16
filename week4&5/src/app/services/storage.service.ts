import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  private _storage: Storage | null = null;
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(value: any) {
    this._storage?.set('todo', value);
  }

  public get() {
    return this._storage.get('todo');
  }

  public async clear() {
    this._storage.clear();
  }
}
