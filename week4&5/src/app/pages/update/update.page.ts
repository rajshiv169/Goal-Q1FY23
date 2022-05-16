import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { format, parseISO } from 'date-fns';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  todoForm: FormGroup;
  id: any;
  todoList: any;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private storageService: StorageService,
    private activatedRoute: ActivatedRoute
  ) {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      dueDate: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      category: ['', [Validators.required]],
      isCompleted: [0, [Validators.required]],
      isCancelled: [0, [Validators.required]]
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      if(param.id) {
        this.id = param.id;
        this.getData();
      }
    })
  }

  async getData() {
    this.todoList = await this.storageService.get() || [];
    if(this.todoList.length) {
      let singleTodo = this.todoList[this.id];
      this.todoForm.patchValue({
        ...singleTodo,
      });
    }
  }

  cancel() {
    this.router.navigate([''], { replaceUrl: true });
  }

  formatDate(value: string) {
    this.todoForm.patchValue({
      dueDate: format(parseISO(value), 'MMM dd yyyy'),
    });
  }

  async update() {
    if(this.todoForm.invalid) {
      this.todoForm.markAllAsTouched();
      return;
    }
    this.todoList[this.id] = this.todoForm.value;
    await this.storageService.set(this.todoList);
    this.cancel();
  }

}
