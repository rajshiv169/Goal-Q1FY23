import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { format, parseISO } from 'date-fns';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  todoForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      dueDate: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      category: ['', [Validators.required]],
      isCompleted: [0, [Validators.required]],
      isCancelled: [0, [Validators.required]]
   });
  }

  cancel() {
    this.router.navigate([''], { replaceUrl: true });
  }

  formatDate(value: string) {
    this.todoForm.patchValue({
      dueDate: format(parseISO(value), 'MMM dd yyyy'),
    });
  }

  async create() {
    if(this.todoForm.invalid) {
      this.todoForm.markAllAsTouched();
      return;
    }
    const todoList: any = await this.storageService.get() || [];
    const length = todoList.length + 1;
    const newTodo = {
      ...this.todoForm.value,
      id: length
    };
    todoList.push(newTodo);
    await this.storageService.set(todoList);
    this.cancel();
  }
}
