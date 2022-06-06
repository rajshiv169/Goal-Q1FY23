import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private baseService: BaseService
  ) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(this.data ? this.data.name : null, [
        Validators.required,
      ]),
      email: new FormControl(this.data ? this.data.email : null, [
        Validators.required,
      ]),
    });
  }

  addOrUpdateUser() {
    if (this.data) {
      this.updateUser();
    } else {
      this.addUser();
    }
  }

  updateUser() {
    const updatedUser = { ...this.data, ...this.userForm.value };
    this.baseService.updateUser(updatedUser);
    this.dialogRef.close();
  }

  addUser() {
    this.baseService.addUser(this.userForm.value);
    this.dialogRef.close();
  }
}
