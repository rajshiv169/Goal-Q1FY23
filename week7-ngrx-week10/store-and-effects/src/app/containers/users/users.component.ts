import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { takeWhile } from 'rxjs/operators';
import { UpdateUserComponent } from 'src/app/components';
import { User } from 'src/app/models/user.model';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: User[] = [];
  loading = false;
  error = false;
  isAlive = true;
  constructor(private baseService: BaseService, private dialog: MatDialog) { }

  ngOnInit() {
    this.fetchData();
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  fetchData() {
    const observer$ = this.baseService.getUserList();
    const userData$ = observer$[1];
    const loading$ = observer$[0];
    const error$ = observer$[2];
    userData$.pipe(takeWhile(() => this.isAlive)).subscribe((data: any) => {
      this.users = data;
    });
    loading$.pipe(takeWhile(() => this.isAlive)).subscribe((data: any) => {
      this.loading = data;
    });
    error$.pipe(takeWhile(() => this.isAlive)).subscribe((data: any) => {
      this.error = data;
    });
  }

  tryAgain() {
    this.baseService.getUserList(true);
  }

  addUser() {
    this.dialog.open(UpdateUserComponent, {
      width: '256px'
    });
  }

}
