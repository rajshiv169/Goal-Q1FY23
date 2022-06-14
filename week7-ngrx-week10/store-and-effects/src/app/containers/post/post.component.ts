import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { Post } from 'src/app/models/post.model';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  postList: Post[];
  isAlive = true;
  loading = false;
  error = false;

  constructor(private baseService: BaseService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const observer$ = this.baseService.getAllPost();
    const postData$ = observer$[1];
    const loading$ = observer$[0];
    const error$ = observer$[2];
    postData$.pipe(takeWhile(() => this.isAlive)).subscribe((data) => {
      this.postList = data;
    });
    loading$.pipe(takeWhile(() => this.isAlive)).subscribe((data) => {
      this.loading = data;
    });
    error$.pipe(takeWhile(() => this.isAlive)).subscribe((data) => {
      this.error = data;
    });
  }

  ngOnDestroy(): void {
      this.isAlive = false;
  }
}
