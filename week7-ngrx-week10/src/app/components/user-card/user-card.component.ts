import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { BaseService } from 'src/app/services/base.service';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {

  @Input() user: any;
  constructor(
    private baseService: BaseService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void { }

  delete() {
    this.baseService.deleteUser(this.user.id);
  }

  update() {
    this.dialog.open(UpdateUserComponent, {
      width: '256px',
      data: this.user,
    });
  }

  open() {
    this.router.navigate(['user', this.user.id]);
  }
}
